import { useRef, useState } from 'react'
import { copyText, downloadFile, stamp, toCsv, toMarkdown, toPlainLinks } from '../lib/exporters.js'
import { parseImport } from '../lib/storage.js'

function BarButton({ onClick, children, title }) {
  return (
    <button
      type="button"
      onClick={onClick}
      title={title}
      className="flex h-9 shrink-0 items-center gap-1.5 rounded-lg bg-white px-2.5 text-xs font-medium whitespace-nowrap text-zinc-600 shadow-sm ring-1 ring-zinc-200 transition hover:bg-zinc-50 hover:text-zinc-900 sm:h-8 sm:text-[11px] dark:bg-zinc-800 dark:text-zinc-300 dark:ring-zinc-700 dark:hover:bg-zinc-700 dark:hover:text-white"
    >
      {children}
    </button>
  )
}

export default function ShareExportBar({ list, buildUrl, role, onToast, onBackup, onRestore }) {
  const [busy, setBusy] = useState(false)
  const fileRef = useRef(null)
  const count = list.length

  const run = async (label, action) => {
    setBusy(true)
    try {
      const result = await action()
      onToast(result === false ? `${label} — blocked by the browser` : result || label)
    } catch (error) {
      onToast(error?.message || `${label} failed`)
    } finally {
      setBusy(false)
    }
  }

  const openAll = () =>
    run('Opening portals', async () => {
      const targets = list.slice(0, 8)
      let opened = 0
      for (const company of targets) {
        const win = window.open(buildUrl(company), '_blank', 'noopener,noreferrer')
        if (win) {
          opened += 1
          try {
            win.opener = null
          } catch {
            /* ignore */
          }
        }
        await new Promise((resolve) => setTimeout(resolve, 220))
      }
      return opened > 0
        ? `Opened ${opened} of ${targets.length} portals`
        : 'Popups blocked — allow popups to bulk open'
    })

  return (
    <div className="-mx-1 flex w-full min-w-0 items-center gap-2 overflow-x-auto px-1 pb-1 overscroll-x-contain sm:mx-0 sm:w-auto sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
      <span className="shrink-0 text-[11px] text-zinc-500 dark:text-zinc-400">{count} in view</span>

      <BarButton
        onClick={() => run('View link copied', async () => (await copyText(window.location.href)) ? 'View link copied' : false)}
        title="Copy a shareable link that restores these exact filters"
      >
        Copy view link
      </BarButton>

      <BarButton
        onClick={() =>
          run('Links copied', async () =>
            (await copyText(toPlainLinks(list, buildUrl))) ? `${count} links copied` : false,
          )
        }
        title="Copy every portal URL in the current view"
      >
        Copy links
      </BarButton>

      <BarButton
        onClick={() =>
          run('Markdown copied', async () =>
            (await copyText(toMarkdown(list.slice(0, 60), buildUrl, role)))
              ? 'Markdown shortlist copied'
              : false,
          )
        }
        title="Copy a markdown shortlist with salaries and links"
      >
        Markdown
      </BarButton>

      <BarButton
        onClick={() =>
          run('CSV downloaded', () => {
            downloadFile(
              `jatrix-${stamp()}.csv`,
              toCsv(list, buildUrl),
              'text/csv;charset=utf-8',
            )
            return `${count} rows exported`
          })
        }
        title="Download the current view as CSV"
      >
        CSV
      </BarButton>

      <BarButton onClick={openAll} title="Open up to 8 portals at once (your browser may block popups)">
        Open all
      </BarButton>

      <span className="mx-1 hidden h-5 w-px shrink-0 bg-zinc-200 sm:block dark:bg-zinc-700" />

      <BarButton
        onClick={() =>
          run('Backup downloaded', () => {
            downloadFile(
              `jatrix-backup-${stamp()}.json`,
              JSON.stringify(onBackup(), null, 2),
              'application/json',
            )
            return 'Backup downloaded'
          })
        }
        title="Download stars and notes as JSON"
      >
        Backup
      </BarButton>

      <BarButton onClick={() => fileRef.current?.click()} title="Restore stars and notes from a backup">
        Restore
      </BarButton>
      <input
        ref={fileRef}
        type="file"
        accept="application/json,.json"
        className="hidden"
        onChange={async (event) => {
          const file = event.target.files?.[0]
          event.target.value = ''
          if (!file) return
          try {
            onRestore(parseImport(await file.text()))
            onToast('Backup restored')
          } catch (error) {
            onToast(error.message || 'Could not read that file')
          }
        }}
      />

      <span className="sr-only" aria-live="polite">
        {busy ? 'Working…' : ''}
      </span>
    </div>
  )
}
