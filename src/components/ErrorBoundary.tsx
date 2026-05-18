import { Component, type ErrorInfo, type ReactNode } from 'react'
import { SITE } from '../constants/site'

type Props = {
  children: ReactNode
}

type State = {
  hasError: boolean
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Application error boundary caught an error:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-dvh items-center justify-center bg-[#f8f9fc] px-6 text-[#0a0a0a] dark:bg-[#030712] dark:text-white">
          <section className="max-w-md text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-[#6366f1]">Something went wrong</p>
            <h1 className="mt-4 font-display text-4xl font-black tracking-tight">Please refresh the page.</h1>
            <p className="mt-5 text-sm leading-6 text-[#737373] dark:text-white/60">
              If the issue continues, contact {SITE.name} at{' '}
              <a className="font-bold text-[#6366f1]" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              .
            </p>
          </section>
        </main>
      )
    }

    return this.props.children
  }
}
