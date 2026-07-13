import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog"
import { ChevronLeft, Timer, X, ChevronRight } from "lucide-react"

import { useState } from "react"

export default function DialogQuestions({ dialog, setDialog }: { dialog: boolean; setDialog: (open: boolean) => void }) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  return (
    <Dialog open={dialog} onOpenChange={setDialog}>
      <DialogContent showCloseButton={false} className="max-w-lg w-[90vw] max-h-[90vh] overflow-y-auto p-6 sm:p-8 rounded-3xl border-0 shadow-2xl bg-white">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button onClick={() => setDialog(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-yellow-400 text-yellow-900 px-3 py-1.5 rounded-full text-sm font-bold">
              <Timer className="w-4 h-4" />
              <span>09:07</span>
            </div>
            <button onClick={() => setDialog(false)} className="p-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full transition-colors">
              <X className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mb-6">
          {[1, 2, 3, 4].map(num => (
            <div key={num} className="w-8 h-8 rounded-full bg-cyan-100 text-cyan-500 flex items-center justify-center text-sm font-semibold">
              {num}
            </div>
          ))}
          <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-semibold shadow-md shadow-blue-500/30">
            5
          </div>
        </div>

        {/* Quote */}
        <div className="text-center mb-8">
          <p className="text-gray-500 italic text-sm">
            "Programming isn't about what you know; it's about what you can figure out."
            <br />
            <span className="font-semibold mt-1.5 inline-block text-gray-700">- Ali Shahine</span>
          </p>
        </div>

        {/* Question */}
        <div className="mb-5 text-gray-800 font-bold text-base sm:text-lg">
          5. A canonical tag is primarily used to:
        </div>

        {/* Options */}
        <div className="space-y-3">
          {[
            "Block a page from indexing",
            "Point to the preferred version of a page",
            "Speed up page load",
            "Add structured data"
          ].map((option, idx) => {
            const isSelected = selectedOption === idx;
            return (
              <label 
                key={idx} 
                onClick={() => setSelectedOption(idx)}
                className={`flex items-center gap-4 p-4 rounded-xl border cursor-pointer transition-all ${isSelected ? 'border-blue-400 bg-blue-50/50' : 'border-gray-200 hover:border-gray-300'}`}
              >
                <div className={`w-4 h-4 rounded flex items-center justify-center border ${isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}`}>
                  {isSelected && <div className="w-1.5 h-1.5 bg-white rounded-sm" />}
                </div>
                <span className={isSelected ? 'text-blue-900 text-sm sm:text-base font-medium' : 'text-gray-700 text-sm sm:text-base'}>{option}</span>
              </label>
            )
          })}
        </div>

        {/* Footer */}
        <div className="mt-8 flex justify-end">
          <Button 
            className={`rounded-xl px-6 py-2.5 h-auto text-base font-medium shadow-none transition-colors ${
              selectedOption !== null 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={selectedOption === null}
          >
            Next <ChevronRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
