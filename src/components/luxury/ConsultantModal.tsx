import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ConsultantModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ConsultantCard = () => (
  <div className="flex flex-col items-center gap-6 py-4">
    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/20 flex items-center justify-center text-3xl font-display font-bold text-primary">
      RS
    </div>

    <div className="text-center space-y-1">
      <h3 className="text-xl font-display font-semibold text-foreground">Rahul Sharma</h3>
      <p className="text-sm text-muted-foreground">Senior Property Consultant</p>
      <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground pt-1">
        <MapPin className="w-3.5 h-3.5" />
        <span>Hyderabad, India</span>
      </div>
    </div>

    <div className="w-full space-y-3 pt-2">
      <Button asChild className="w-full gap-2 rounded-xl h-12">
        <a href="tel:+919876543210">
          <Phone className="w-4 h-4" /> Call Now
        </a>
      </Button>
      <Button asChild variant="outline" className="w-full gap-2 rounded-xl h-12">
        <a href="mailto:rahul@infinityproperties.com">
          <Mail className="w-4 h-4" /> Send Email
        </a>
      </Button>
      <Button variant="ghost" className="w-full gap-2 rounded-xl h-12 border border-border">
        <Calendar className="w-4 h-4" /> Book a Visit
      </Button>
    </div>

    <div className="w-full pt-2 border-t border-border space-y-2 text-sm text-muted-foreground">
      <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-primary transition-colors">
        <Phone className="w-3.5 h-3.5" /> +91 98765 43210
      </a>
      <a href="mailto:rahul@infinityproperties.com" className="flex items-center gap-2 hover:text-primary transition-colors">
        <Mail className="w-3.5 h-3.5" /> rahul@infinityproperties.com
      </a>
    </div>
  </div>
);

export const ConsultantModal = ({ open, onOpenChange }: ConsultantModalProps) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="bottom" className="rounded-t-2xl px-6 pb-8">
          <SheetHeader className="text-center pb-2">
            <SheetTitle className="font-display">Your Consultant</SheetTitle>
            <SheetDescription>Get in touch with our property expert</SheetDescription>
          </SheetHeader>
          <ConsultantCard />
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md rounded-2xl">
        <DialogHeader className="text-center pb-2">
          <DialogTitle className="font-display text-center">Your Consultant</DialogTitle>
          <DialogDescription className="text-center">Get in touch with our property expert</DialogDescription>
        </DialogHeader>
        <ConsultantCard />
      </DialogContent>
    </Dialog>
  );
};
