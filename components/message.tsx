"use client";

import { Label } from "./ui/label";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { useEffect, useState } from "react";

interface GuestBook {
  id: number;
  name: string;
  attendees: string;
  guestnum: string;
  message: string;
  createdAt: string;
}

interface ApiResponse {
  status: number;
  data: GuestBook[];
}
function WeddingMessage() {
  const rowsPerPage = 4;

  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(rowsPerPage);

  const [data, setData] = useState<ApiResponse>({ status: 0, data: [] });
  
   useEffect(() => {
    fetch('/api/message')
      .then(response => response.json())
      .then(data => {
        setData(data)
      });
  }, [startIndex, endIndex]);
  
  const guestItems = data.data;

  return (
    <div>
      <div className="flex flex-col gap-2 items-center justify-center font-regular">
            <Label className="lg:text-3xl text-xl lg:mb-8 mb-2 uppercase font-semibold text-[#3E3E3E]">Message </Label>
            <div className="flex flex-col gap-5">
              {Array.isArray(guestItems) && guestItems.slice(startIndex, endIndex).map((guestBook) => (
                
               <div
               key={guestBook.id}
               className="flex flex-col bg-black/50 text-white lg:w-[700px] w-80 lg:py-6 py-2 lg:px-8 px-5 rounded-lg  ">
                    <Label className="lg:text-xl text-md font-semibold capitalize">{guestBook.name}</Label>
                    <Label className="lg:text-md text-md mt-1 mb-1">{guestBook.createdAt.replace('T', '  -  ').slice(0, 20)}</Label>
                    <p className="lg:text-xl text-md whitespace-pre-wrap">{guestBook.message.replace(/\\n/g, '\n')}</p>
               </div>
              ))}
            </div>
          </div>
        <Pagination >
          <PaginationContent className="flex flex-row mt-8 lg:gap-138 gap-42 items-center">
            <PaginationItem>
              <PaginationPrevious
              className={
                startIndex === 0 ? "pointer-events-none opacity-50" : undefined
              }
              onClick={() => {
                setStartIndex(startIndex - rowsPerPage);
                setEndIndex(endIndex - rowsPerPage);
              }}/>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext 
              className={
                endIndex >= guestItems?.length ? "pointer-events-none opacity-50" : undefined
              }
              onClick={() => {
                setStartIndex(startIndex + rowsPerPage); //10
                setEndIndex(endIndex + rowsPerPage); //10 + 10 = 20
              }} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
    </div>
  );
  
}

export default WeddingMessage;