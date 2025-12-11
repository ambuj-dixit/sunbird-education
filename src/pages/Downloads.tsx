import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, File } from "lucide-react";
import { downloads } from "@/data/sampleContent";

export const Downloads = () => {
  const handleDownload = (filename: string) => {
    // In a real implementation, this would trigger an actual file download
    alert(`Download would start for: ${filename}\n\nIn production, connect this to your actual file URLs.`);
  };

  const getFileIcon = (filename: string) => {
    if (filename.endsWith(".pdf")) return FileText;
    if (filename.endsWith(".doc") || filename.endsWith(".docx")) return File;
    return FileText;
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Downloads</h1>
            <div className="h-1 w-24 bg-primary mx-auto rounded mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Important documents, certificates, and information available for download
            </p>
          </div>

          <div className="space-y-4">
            {downloads.map((doc, index) => {
              const FileIcon = getFileIcon(doc.filename);
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="h-16 w-16 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <FileIcon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-heading font-bold mb-1">{doc.title}</h3>
                        <p className="text-sm text-muted-foreground mb-2">{doc.description}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="font-mono">{doc.filename}</span>
                          <span>•</span>
                          <span>{doc.size}</span>
                        </div>
                      </div>
                      <Button
                        onClick={() => handleDownload(doc.filename)}
                        className="w-full sm:w-auto flex-shrink-0"
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Information Box */}
          <Card className="mt-12 border-primary/20">
            <CardContent className="p-8">
              <h2 className="text-xl font-heading font-bold mb-4">Note:</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>All documents are in PDF or DOC format. You'll need a PDF reader or word processor to view them.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    If you have trouble downloading any document, please contact the school office at{" "}
                    {downloads[0] && <span className="font-semibold">office@sunbird.edu.in</span>}
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Documents are updated regularly. Check back for the latest versions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    For documents not listed here, please visit the school office or contact us through the
                    contact page.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
