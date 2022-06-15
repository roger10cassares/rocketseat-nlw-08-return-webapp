import { CloseButton } from "../CloseButton";

import bugImageUrl from '../../assets/images/bug.svg'
import ideaImageUrl from '../../assets/images/idea.svg'
import thoughtImageUrl from '../../assets/images/thought.svg'
import { useState } from "react";
import { FeedTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: 'Trouble',
    image: {
      source: bugImageUrl,
      alt: 'Picture of a bug'
    }
  },
  IDEA: {
    title: 'Idea',
    image: {
      source: ideaImageUrl,
      alt: 'Picture of a bug'
    }
  },
  OTHER: {
    title: 'Other',
    image: {
      source: thoughtImageUrl,
      alt: 'Picture of a thought balloon'
    }
  },
}

// Object.entries(feedbackTypes) =>
/** It is much easy we go through an array than an object in js
 * [
  * ['BUG', {...}],
  * ['IDEA', {...}],
  * ['OTHER', {...}]
 * ]
 * 
 */

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)

  function handleRestartFeedback() {
    setFeedbackType(null)
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep 
          feedbackType={feedbackType}
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      )}

      <footer className="text-xs text-neutral-400">
        Done with ♥ by <a className="underline underline-offset-2" href="https://rocketseat.com.br">Rocketseat</a>
      </footer>
    </div>
  )
}