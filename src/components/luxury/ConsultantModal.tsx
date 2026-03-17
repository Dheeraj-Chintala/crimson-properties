import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Calendar, MessageCircle } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ConsultantModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AGENT = {
  name: "Rahul Sharma",
  initials: "RS",
  role: "Senior Property Consultant",
  phone: "+919876543210",
  phoneDisplay: "+91 98765 43210",
  email: "rahul@infinityproperties.com",
  location: "Hyderabad, India",
};

const emailSubject = encodeURIComponent("Property Inquiry - InfinityInnovativeProperties");
const emailBody = encodeURIComponent(
  `Hello ${AGENT.name},\n\nI am interested in exploring properties listed on InfinityInnovativeProperties.\n\nPlease assist me with more details.\n\nThank you.`
);
const whatsappMsg = encodeURIComponent(
  `Hello ${AGENT.name}, I am interested in properties listed on InfinityInnovativeProperties. Please share more details.`
);

const ConsultantCard = () => (
  <div className="flex flex-col items-center gap-5 py-2">
    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/20 flex items-center justify-center text-2xl font-display font-bold text-primary">
      {AGENT.initials}
    </div>

    <div className="text-center space-y-1">
      <h3 className="text-xl font-display font-semibold text-foreground">{AGENT.name}</h3>
      <p className="text-sm text-muted-foreground">{AGENT.role}</p>
      <div className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground pt-1">
        <MapPin className="w-3.5 h-3.5" />
        <span>{AGENT.location}</span>
      </div>
      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600 mt-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        Available Now
      </span>
    </div>

    <p className="text-xs text-muted-foreground text-center leading-relaxed max-w-xs">
      You're now connected with your assigned property consultant. Reach out instantly using the options below.
    </p>

    <div className="w-full space-y-2.5">
      <Button asChild className="w-full gap-2 rounded-xl h-11">
        <a href={`tel:${AGENT.phone}`}>
          <Phone className="w-4 h-4" /> Call Now
        </a>
      </Button>
      <Button asChild variant="outline" className="w-full gap-2 rounded-xl h-11">
        <a href={`mailto:${AGENT.email}?subject=${emailSubject}&body=${emailBody}`}>
          <Mail className="w-4 h-4" /> Send Email
        </a>
      </Button>
      <Button asChild className="w-full gap-2 rounded-xl h-11 bg-[#25D366] hover:bg-[#1ebe57] text-primary-foreground border-0">
        <a href={`https://wa.me/${AGENT.phone}?text=${whatsappMsg}`} target="_blank" rel="noopener noreferrer">
          <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
        </a>
      </Button>
      <Button variant="ghost" className="w-full gap-2 rounded-xl h-11 border border-border">
        <Calendar className="w-4 h-4" /> Book a Visit
      </Button>
    </div>

    <div className="w-full pt-2 border-t border-border space-y-1.5 text-sm text-muted-foreground">
      <a href={`tel:${AGENT.phone}`} className="flex items-center gap-2 hover:text-primary transition-colors">
        <Phone className="w-3.5 h-3.5" /> {AGENT.phoneDisplay}
      </a>
      <a href={`mailto:${AGENT.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
        <Mail className="w-3.5 h-3.5" /> {AGENT.email}
      </a>
    </div>
  </div>
);

const modalTitle = "Your Property Consultant";
const modalDesc = "Get in touch with your assigned expert";

export const ConsultantModal = ({ open, onOpenChange }: ConsultantModalProps) => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <Sheet open={open} onOpenChange={onOpenChange}>
        <SheetContent side="bottom" className="rounded-t-2xl px-6 pb-8">
          <SheetHeader className="text-center pb-2">
            <SheetTitle className="font-display">{modalTitle}</SheetTitle>
            <SheetDescription>{modalDesc}</SheetDescription>
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
          <DialogTitle className="font-display text-center">{modalTitle}</DialogTitle>
          <DialogDescription className="text-center">{modalDesc}</DialogDescription>
        </DialogHeader>
        <ConsultantCard />
      </DialogContent>
    </Dialog>
  );
};
