(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{194:function(e,a,n){"use strict";n.r(a);var t=n(0),r=function(e){e.options.__data__block__={mermaid_1a962850:"sequenceDiagram\n    Popup->>Background: Get QR Data\n    Background->>Background: Start listening for new connections\n    Background->>Popup: Return QR Data\n    Popup->>Wallet: Show QR Code (publicKey exchange)\n    Wallet->>Wallet: User scans QR code\n    Wallet->>Background: Send own publicKey to dApp, connection established\n    Background->>Popup: Successful connection\n",mermaid_382ee145:"sequenceDiagram\n    dApp->>Background: Request\n\n    Background->>Wallet: Permission Prompt\n    Wallet->>Wallet: User Confirmation\n    Wallet->>Background: Permission Response\n\n    Background->>dApp: Response\n",mermaid_382ee149:"sequenceDiagram\n    dApp->>Background: Request\n    Background->>Wallet: Operation Request\n\n    opt no threshold\n        Wallet->>Wallet: User confirmation\n    end\n    Wallet->>Wallet: Forge Operation\n    Wallet->>Wallet: Sign\n    Wallet->>Wallet: Broadcast\n\n    Wallet->>Background: Operation Response\n    Background->>dApp: Response\n",mermaid_382ee14d:"sequenceDiagram\n    dApp->>Background: Request\n    Background->>Wallet: Sign Request\n\n    opt no threshold\n        Wallet->>Wallet: User confirmation\n    end\n    Wallet->>Wallet: Sign\n    Wallet->>Background: Sign Response\n    Background->>dApp: Response\n",mermaid_382ee166:"sequenceDiagram\n    dApp->>Background: Request\n\n    Background->>Wallet: Signing Request\n    Wallet->>Wallet: User confirmation\n    Wallet->>Background: Signing Response\n\n    Background->>Background: Broadcast\n\n    Background->>dApp: Response\n"}},s=Object(t.a)({},(function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"p2p-flow-extension"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p2p-flow-extension"}},[e._v("#")]),e._v(" P2P Flow (Extension)")]),e._v(" "),n("h2",{attrs:{id:"init"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#init"}},[e._v("#")]),e._v(" Init")]),e._v(" "),n("Mermaid",{attrs:{id:"mermaid_1a962850",graph:e.$dataBlock.mermaid_1a962850}}),n("h2",{attrs:{id:"permission-request"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#permission-request"}},[e._v("#")]),e._v(" Permission Request")]),e._v(" "),n("Mermaid",{attrs:{id:"mermaid_382ee145",graph:e.$dataBlock.mermaid_382ee145}}),n("h2",{attrs:{id:"operation-request"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#operation-request"}},[e._v("#")]),e._v(" Operation Request")]),e._v(" "),n("Mermaid",{attrs:{id:"mermaid_382ee149",graph:e.$dataBlock.mermaid_382ee149}}),n("h2",{attrs:{id:"signing-request"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#signing-request"}},[e._v("#")]),e._v(" Signing Request")]),e._v(" "),n("Mermaid",{attrs:{id:"mermaid_382ee14d",graph:e.$dataBlock.mermaid_382ee14d}}),n("h2",{attrs:{id:"broadcast-request"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#broadcast-request"}},[e._v("#")]),e._v(" Broadcast Request")]),e._v(" "),n("Mermaid",{attrs:{id:"mermaid_382ee166",graph:e.$dataBlock.mermaid_382ee166}})],1)}),[],!1,null,null,null);"function"==typeof r&&r(s);a.default=s.exports}}]);