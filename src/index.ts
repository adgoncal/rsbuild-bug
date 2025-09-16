import {
  EventBus,
  GenericL10n,
  PDFLinkService,
  PDFViewer,
} from "pdfjs-dist/web/pdf_viewer.mjs";
import "./index.css";

const rootEl: HTMLDivElement | null = document.querySelector("#root");
if (rootEl) {
  const l10n = new GenericL10n("en-US");
  const linkService = new PDFLinkService();
  const eventBus = new EventBus();
  const pdfViewer = new PDFViewer({
    container: rootEl,
    eventBus,
    l10n,
    linkService,
    textLayerMode: 2,
  });
  console.log(pdfViewer);
}
