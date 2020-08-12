(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{192:function(e,a,t){"use strict";t.r(a);var r=t(0),n=function(e){e.options.__data__block__={mermaid_1a962850:"sequenceDiagram\n    dApp->>Wallet: Show QR Code (publicKey exchange)\n    Wallet->>Wallet: User scans QR code\n    Wallet->>dApp: Send own publicKey to dApp, connection established\n",mermaid_382ee145:"sequenceDiagram\n    dApp->>Wallet: User Prompt (Do you want to pair?)\n    Wallet->>Wallet: Grant permissions\n    Wallet->>dApp: Return Address & Permissions\n",mermaid_382ee149:"sequenceDiagram\n    dApp->>Wallet: Request\n\n    opt no threshold\n        Wallet->>Wallet: User confirmation\n    end\n\n    Wallet->>Wallet: Forge Operation\n    Wallet->>Wallet: Sign\n    Wallet->>Wallet: Broadcast\n\n    Wallet->>dApp: Response\n",mermaid_382ee14d:"sequenceDiagram\n    dApp->>Wallet: Request\n    opt no threshold\n        Wallet->>Wallet: User confirmation\n    end\n    Wallet->>Wallet: Sign\n    Wallet->>dApp: Response\n",mermaid_382ee186:"sequenceDiagram\n    dApp->>Wallet: Request\n\n    Wallet->>Wallet: User confirmation\n    Wallet->>Wallet: Broadcast\n\n    Wallet->>dApp: Response\n"}},s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"p2p-direct-flow-direct"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#p2p-direct-flow-direct"}},[e._v("#")]),e._v(" P2P Direct Flow (Direct)")]),e._v(" "),t("h2",{attrs:{id:"init"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#init"}},[e._v("#")]),e._v(" Init")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_1a962850",graph:e.$dataBlock.mermaid_1a962850}}),t("h2",{attrs:{id:"permission-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#permission-request"}},[e._v("#")]),e._v(" Permission Request")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_382ee145",graph:e.$dataBlock.mermaid_382ee145}}),t("h2",{attrs:{id:"operation-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#operation-request"}},[e._v("#")]),e._v(" Operation Request")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_382ee149",graph:e.$dataBlock.mermaid_382ee149}}),t("h2",{attrs:{id:"signing-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#signing-request"}},[e._v("#")]),e._v(" Signing Request")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_382ee14d",graph:e.$dataBlock.mermaid_382ee14d}}),t("table",[t("thead",[t("tr",[t("th",[e._v("WARNING: Can threshold be abused to sign contract calls?")])])]),e._v(" "),t("tbody")]),e._v(" "),t("h2",{attrs:{id:"broadcast-request"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#broadcast-request"}},[e._v("#")]),e._v(" Broadcast Request")]),e._v(" "),t("Mermaid",{attrs:{id:"mermaid_382ee186",graph:e.$dataBlock.mermaid_382ee186}})],1)}),[],!1,null,null,null);"function"==typeof n&&n(s);a.default=s.exports}}]);