"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Loader2, CheckCircle2 } from "lucide-react"

interface ContactFormProps {
  defaultSport?: string
  defaultEvent?: string
}

export function ContactForm({ defaultSport, defaultEvent }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessDialog, setShowSuccessDialog] = useState(false)
  const { toast } = useToast()
  const [selectedSport, setSelectedSport] = useState(defaultSport || "")
  const [selectedEvent, setSelectedEvent] = useState(defaultEvent || "")

  useEffect(() => {
    if (defaultSport) setSelectedSport(defaultSport)
    if (defaultEvent) setSelectedEvent(defaultEvent)
  }, [defaultSport, defaultEvent])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setShowSuccessDialog(true)

    toast({
      title: (
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-green-600" />
          <span>Anfrage erfolgreich gesendet!</span>
        </div>
      ) as any,
      description: "Vielen Dank für Ihre Anfrage. Unser Team wird sich innerhalb von 24 Stunden bei Ihnen melden.",
      duration: 5000,
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
    setSelectedSport(defaultSport || "")
    setSelectedEvent(defaultEvent || "")
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">Vorname *</Label>
            <Input id="firstName" name="firstName" required placeholder="Max" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lastName">Nachname *</Label>
            <Input id="lastName" name="lastName" required placeholder="Mustermann" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">E-Mail *</Label>
          <Input id="email" name="email" type="email" required placeholder="max@beispiel.de" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Telefon</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+49 89 7264 3891" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="sport">Sportart *</Label>
          <Select name="sport" required value={selectedSport} onValueChange={setSelectedSport}>
            <SelectTrigger id="sport">
              <SelectValue placeholder="Wählen Sie eine Sportart" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fussball">Fußball</SelectItem>
              <SelectItem value="tennis">Tennis</SelectItem>
              <SelectItem value="basketball">Basketball</SelectItem>
              <SelectItem value="handball">Handball</SelectItem>
              <SelectItem value="volleyball">Volleyball</SelectItem>
              <SelectItem value="eishockey">Eishockey</SelectItem>
              <SelectItem value="formel1">Formel 1</SelectItem>
              <SelectItem value="leichtathletik">Leichtathletik</SelectItem>
              <SelectItem value="andere">Andere</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="event">Gewünschtes Event</Label>
          <Input
            id="event"
            name="event"
            placeholder="z.B. Champions League Finale"
            value={selectedEvent}
            onChange={(e) => setSelectedEvent(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="ticketCount">Anzahl Tickets</Label>
          <Input id="ticketCount" name="ticketCount" type="number" min="1" defaultValue="2" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Ihre Nachricht *</Label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="Teilen Sie uns Ihre Wünsche und Anforderungen mit..."
            rows={5}
          />
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Wird gesendet...
            </>
          ) : (
            "Anfrage senden"
          )}
        </Button>

        <p className="text-xs text-muted-foreground">
          * Pflichtfelder. Ihre Daten werden vertraulich behandelt und nicht an Dritte weitergegeben.
        </p>
      </form>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 p-4 rounded-full">
                <CheckCircle2 className="h-12 w-12 text-green-600" />
              </div>
            </div>
            <DialogTitle className="text-center text-2xl">Anfrage erfolgreich gesendet!</DialogTitle>
            <DialogDescription className="text-center text-base pt-2">
              Vielen Dank für Ihre Anfrage. Unser Team wird sich innerhalb von 24 Stunden bei Ihnen melden.
            </DialogDescription>
          </DialogHeader>
          <div className="bg-muted rounded-lg p-4 mt-4">
            <p className="text-sm text-center text-muted-foreground mb-2">Sie können uns auch direkt kontaktieren:</p>
            <p className="text-center font-bold text-secondary">+49 89 7264 3891</p>
            <p className="text-center text-sm text-muted-foreground mt-1">info@ticketarenade.com</p>
          </div>
          <Button
            onClick={() => setShowSuccessDialog(false)}
            className="w-full mt-4 bg-secondary hover:bg-secondary/90"
          >
            Schließen
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
