import React, { useRef, useEffect, useState } from "react"

export default () => {
  const iframe = useRef<HTMLIFrameElement>(null);
  const [contentWindow, setContentWindow] = useState<Window>();

  useEffect(() => {
    const channel = new MessageChannel();
    contentWindow?.postMessage({ test: 'dutao' }, 'http://localhost:3001', [channel.port2])
    channel.port1.onmessage = function (message) {
      console.log(message);
    }
  }, [contentWindow])

  const iframeOnLoad = () => {
    setContentWindow(iframe.current!.contentWindow!);
  }

  return (
    <div>
      <iframe onLoad={iframeOnLoad} ref={iframe} src="http://localhost:3001/" />
    </div>
  )
}