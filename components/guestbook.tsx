"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Toaster } from "./ui/sonner";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

function Guestbook() {
  const [isSubmitting, setIsSubmitting] = useState(false); // <-- state loading
  const [isCreated, setIsCreated] = useState(false);
  const [name, setName] = useState("");
  const [attendees, setAttendees] = useState("");
  const [guest, setGuest] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      name,
      attendees,
      guest,
      message,
    };

    if (!name || !attendees || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true); // start loading

    try {
      await fetch("/api/guestbook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setIsCreated(true);
      toast.success("Success");
      // optionally reset form here
      setName("");
      setAttendees("");
      setGuest("");
      setMessage("");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setIsSubmitting(false); // stop loading
    }
  };

  return (
    <div className="font-regular items-center mx-auto">
      <Card className="flex flex-col md:w-150 lg:w-[700px] w-85 bg-[#F9F5EC] text-black lg:px-14 px-5 mx-auto lg:py-8 py-5">
        <CardHeader>
          <CardTitle className="lg:text-3xl text-xl uppercase text-[#9D8443] text-center">
            attendance
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="flex flex-col gap-7">
            {/* nama */}
            <div className="flex flex-col gap-1">
              <Label className="text-md" htmlFor="name">
                Guest Name
              </Label>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            {/* attendance */}
            <div className="flex flex-col gap-1">
              <Label className="text-md" htmlFor="email">
                Attendance
              </Label>
              <div className="w-full grid grid-cols-2 gap-2 text-center items-center">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    className="peer sr-only"
                    id="attendees"
                    name="attendees"
                    value="attending"
                    onChange={(e) => setAttendees(e.target.value)}
                  />
                  <div className="lg:w-72 max-w-xl p-2 lg:py-2 py-3 rounded-md bg-[#F8EFD3] ring-2 ring-transparent border border-black/20 transition-all hover:shadow peer-checked:bg-[#F5DB8C]/75 peer-checked:ring-[#9D8443]/50 peer-checked:ring-offset-1 peer-checked:border-none">
                    <div className="flex flex-col gap-1">
                      <p className="text-center lg:text-[16px] text-sm">
                        Will attend
                      </p>
                    </div>
                  </div>
                </label>
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    className="peer sr-only"
                    name="attendees"
                    value="unable to attend"
                    onChange={(e) => setAttendees(e.target.value)}
                  />
                  <div className="lg:w-72 max-w-xl lg:py-2 py-3 rounded-md bg-[#F8EFD3] ring-2 ring-transparent border border-black/20 transition-all hover:shadow peer-checked:bg-[#F5DB8C]/75 peer-checked:ring-[#9D8443]/50 peer-checked:ring-offset-1 peer-checked:border-none">
                    <div className="flex flex-col gap-1">
                      <p className="text-center lg:text-[16px] text-sm">
                        Unable to attend
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            </div>
            {/* guest */}
            <div className="flex flex-col gap-1">
              <Label className="text-md" htmlFor="email">
                Number of guests
              </Label>
              <div className="w-full grid grid-cols-2 gap-4 text-center items-center">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    className="peer sr-only"
                    name="guest"
                    value="1 Guest"
                    onChange={(e) => setGuest(e.target.value)}
                  />
                  <div className="lg:w-72 max-w-xl p-2 rounded-md bg-[#F8EFD3] ring-2 ring-transparent border border-black/20 transition-all hover:shadow peer-checked:bg-[#F5DB8C]/75 peer-checked:ring-[#9D8443]/50 peer-checked:ring-offset-1 peer-checked:border-none">
                    <p className="text-center">1 Guest</p>
                  </div>
                </label>
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    className="peer sr-only"
                    name="guest"
                    value="2 Guests"
                    onChange={(e) => setGuest(e.target.value)}
                  />
                  <div className="lg:w-72 max-w-xl p-2 rounded-md bg-[#F8EFD3] ring-2 ring-transparent border border-black/20 transition-all hover:shadow peer-checked:bg-[#F5DB8C]/75 peer-checked:ring-[#9D8443]/50 peer-checked:ring-offset-1 peer-checked:border-none">
                    <p className="text-center">2 Guests</p>
                  </div>
                </label>
              </div>
            </div>
            {/* message */}
            <div className="flex flex-col gap-1">
              <Label className="text-md" htmlFor="message">
                Message
              </Label>
              <Textarea
                className="min-h-[130px]"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <Toaster position="top-center" toastOptions={{ duration: 3000 }} />
            <Button
              className="lg:mt-4 -mt-7 mb-1 bg-[#F5DB8C] hover:bg-[#f7d05c] border-[#FACB3D] text-black uppercase"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Loading..." : "Submit"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Guestbook;
