import React, { useEffect, useMemo, useState } from 'react'
import { Terminal } from 'xterm'
import classnames from 'classnames'

export default function Xterm(props) {
  const {
    className,
    onInput,
    value,
  } = props

  let term = null
  const [isFocused, setIsFocused] = useState(false)

  const terminalClassName = useMemo(() => {
    return [ className, 'ReactXTerm', isFocused ? 'ReactXTerm--foucused' : null]
  }, [isFocused, className])

  const handleInput = data => {
    term.write(data)
    onInput && onInput(data)
  }


  useEffect(() => {
    term = new Terminal()
    term.open(document.getElementById('xterm'))
    if (onInput) {
      term.onData(handleInput)
    }
    if (value) {
      term.write(value)
    }
  }, [])

  

  return (
    <div
      id="xterm"
      className={classnames(terminalClassName)}
    />
  )
}