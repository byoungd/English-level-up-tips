# Learning with AI (2026 Edition)

Source (中文): [利用 AI 学习](#/threads/part-1/7-ai.md)

> Updated with web-verified product info as of `2026-03-20`.

AI is no longer just a “smart dictionary” or a quick rewrite tool.

If you use it well, it can help you build a repeatable English-learning system: one that gives you input, forces output, corrects mistakes, asks follow-up questions, and helps you review.

If I had to recommend one main AI workflow right now, I would lean toward **Gemini**.

Not because it is automatically the best at everything, but because Google now has a more complete learning stack around it: **Guided Learning, quizzes, flashcards, Canvas, Gems, and Gemini Live**. For English learners, that matters more than raw “answer quality” alone.

---

## 0) Why I Would Prioritize Gemini Right Now

Based on Google’s official help pages and product updates, Gemini currently stands out for English learning for five main reasons:

1. **It now pushes guided learning, not just quick answers**
   - Google introduced `Guided Learning` on `2025-08-06` and explicitly framed it as a way to help people learn through questions, step-by-step breakdowns, visuals, videos, and quizzes.
   - That is exactly what language learners need: not just “the answer,” but structured interaction.

2. **It can turn materials into quizzes, flashcards, and study guides**
   - This makes it easy to transform articles, transcripts, notes, or videos into active review.
   - In practice, that means your input materials can become reusable learning assets instead of one-off consumption.

3. **Canvas is useful for writing, rewriting, and practice materials**
   - You can keep editing the same document, adjust tone or length, and turn drafts into study materials.
   - That makes it especially useful for email writing, summaries, scripts, and revision practice.

4. **Gemini Live is genuinely useful for speaking practice**
   - Google’s help pages explicitly describe Live as a natural spoken back-and-forth mode with interruption support, plus camera and screen sharing.
   - That makes it much more useful than plain text chat if your priority is speaking.

5. **You can turn it into a course, not just a chat**
   - `Gems` let you create a reusable custom tutor with stable instructions.
   - But two official limitations matter:
     - the premade `Learning coach` Gem does **not currently support language learning**
     - `Gems` cannot currently be used inside `Gemini Live`
   - So the best approach is not “use the premade learning coach,” but “build your own English Coach Gem and pair it with Live + Canvas.”

Short version:

> The better way to learn English with AI now is not “ask AI for answers,” but “configure AI into a system that teaches, corrects, and reviews with you.”

---

## 1) Build Your Own Gemini English Course First

If you only do one thing after reading this chapter, do this.

Don’t start with:

> Help me learn English.

That prompt is too vague. You will usually get correct but generic advice.

A better approach is to create your own custom `Gem` and make it your English coach.

You can use something like this as your instructions:

> You are my English Level-Up Coach.  
> My native language is Chinese. My current English level is around B1-B2. My goal is to improve speaking, listening, reading, and writing over the next 12 weeks, with special focus on spoken English and workplace communication.  
>  
> Please follow these rules:  
> 1) Use English by default, but use brief Chinese when explaining hard grammar or subtle meaning differences.  
> 2) Keep each lesson around 20-30 minutes.  
> 3) Each lesson must include warm-up, input, output, correction, and review.  
> 4) Prioritize frequent, high-value mistakes instead of minor perfectionism.  
> 5) Give me one clear goal per lesson.  
> 6) Track my recurring mistakes and review them weekly.  
> 7) If I say “start today’s lesson,” begin immediately.  
> 8) If I upload an article, resume, email, meeting note, or transcript, turn it into learning material.  
> 9) Push me to produce language instead of doing all the work for me.  
> 10) At the end of each lesson, summarize useful expressions, key mistakes, homework, and the focus of the next lesson.

If you already know your goal, add it directly:

- IELTS speaking
- job interviews
- email writing
- workplace English
- technical English

In practice, **custom English Coach Gem + Gemini Live + Canvas** is the most useful Gemini setup for English learning right now.

---

## 2) Speaking & Pronunciation: Use Gemini Live First

Speaking is one of the easiest areas to improve with AI because it benefits so much from interaction, repetition, and immediate correction.

If you have access to Gemini Live, I would prioritize it over typing when practicing spoken English.

Why? Because the moment you have to speak out loud, your real problems show up:

- your sentences are too long
- you freeze on common expressions
- your pronunciation is unstable
- your tone sounds unnatural
- you struggle when someone follows up

Here is a useful prompt:

> Please act as my speaking coach. We will have a natural English conversation for 15 minutes. Keep your turns short. Interrupt me only if I become hard to understand. After every 3 rounds, give me brief feedback on grammar, word choice, and pronunciation priorities.

For workplace speaking:

> Let’s simulate a weekly sync meeting in English. You are my teammate. Ask me one question at a time about project progress, blockers, next steps, and risks. After each answer, tell me how to make it sound more natural and concise.

For visual description practice:

> I will show you a screen, slide, chart, or object. Ask me to describe what I see in English, then help me improve clarity, vocabulary, and structure.

The point is not to “chat for fun.” The point is to force output, isolate problems, and repeat better versions.

---

## 3) Listening: Turn Materials Into Review

A big listening problem is that many learners “study” something once and leave nothing behind.

Gemini’s current quiz / flashcard / study-guide tools are valuable because they let you convert input into active review.

For example:

> Create a quiz about this material. Start with 5 easy comprehension questions, then 5 harder inference questions. After each answer, explain why.

Or:

> Create flashcards about this material. Focus on high-frequency vocabulary, collocations, and sentence patterns that are useful in real conversations, not rare difficult words.

For intensive listening:

> Turn this transcript into a listening lesson for me. Split it into short chunks. Hide the full text first. Let me transcribe one chunk at a time, then compare my answer with the original and explain the key misses.

For intermediate and advanced learners, listening practice is stronger when it has three layers:

1. understand the content
2. extract reusable expressions
3. retell it out loud without looking

That is where listening starts feeding speaking and writing instead of staying isolated.

---

## 4) Reading: Use AI as a Guide, Not a Replacement

One of the worst habits is asking AI to translate the whole article the moment reading gets difficult.

A better use is to make AI your guide and question-asker.

With Guided Learning, try:

> Help me study this article with Guided Learning. Do not translate everything directly. First ask me what I think the main idea is. Then guide me paragraph by paragraph, explain key expressions, and quiz me on the logic.

If the text is too hard:

> Rewrite this article into a clearer version for an upper-intermediate English learner. Keep the key vocabulary, but simplify the sentence structure. Then compare the original and simplified versions.

To push active understanding:

> I will summarize this article in English. After that, score my summary from 0 to 10 for accuracy, clarity, and vocabulary, and tell me what I missed.

Reading gets much more valuable when AI helps you:

- identify the main idea quickly
- track paragraph logic
- extract high-value expressions
- restate the content in your own English

---

## 5) Writing: Use Canvas to Revise, Not Just Rewrite

If you always give AI your idea in Chinese and let it write the English for you, improvement will be slow.

A better workflow is:

1. write your first draft yourself
2. ask AI to mark the biggest issues
3. revise it yourself
4. only then compare with a stronger version

Canvas is especially useful here because it lets you keep iterating on the same text.

Example:

> Here is my draft. Do not rewrite everything immediately. First identify the most important mistakes and weak sentences. Explain why they are weak. Then ask me to revise them myself. After I revise them, show me a stronger version for comparison.

For email writing:

> Improve this email for a professional but natural tone. Give me three versions: polite, concise, and more direct. Then explain when each version is appropriate.

For exam writing:

> Grade this essay using the IELTS Writing Task 2 criteria. Give me band estimates for Task Response, Coherence and Cohesion, Lexical Resource, and Grammatical Range and Accuracy. Then tell me the top 3 changes that would most improve my score.

AI is most useful here when it helps you see what sounds weak or unnatural, not when it simply writes on your behalf.

---

## 6) Vocabulary & Grammar: Compare, Produce, Review

Looking up definitions is fine, but “ask once and forget” usually has low payoff.

Better uses include:

1. **compare similar words**

> Explain the difference between effective, efficient, and practical in Chinese and English. Give me common collocations, natural examples, and 5 short exercises.

2. **build grammar lessons from your mistakes**

> Based on my recent mistakes, design a 15-minute micro lesson on the grammar points I keep getting wrong. Keep it focused and practical.

3. **get reviewed later**

> Save the vocabulary and expressions I marked as useful today. Three days later, test me on them with mixed formats: translation, fill-in-the-blank, and sentence creation.

The most useful expressions are usually not the fanciest ones. They are the ones you can reuse often in real speaking and writing.

---

## 7) Exams & Work: Use AI for High-Fidelity Simulation

For many learners, “improving English” is really shorthand for:

- preparing for IELTS / TOEFL / CET
- preparing for interviews
- speaking in meetings
- writing emails, updates, and reports

These are exactly the kinds of tasks AI is good at simulating.

IELTS speaking:

> Act as an IELTS speaking examiner. Ask me one question at a time in Part 1, Part 2, and Part 3 order. After each answer, give me short feedback on fluency, grammar, vocabulary, and how to sound more natural.

Job interviews:

> Act as an interviewer for an international tech company. Ask me common behavioral and role-specific questions one by one. Challenge vague answers and ask follow-up questions. After each round, tell me how to make my answer clearer and more convincing.

Meetings and updates:

> Help me prepare a 10-minute English project update. First turn my notes into a speaking outline, then ask me likely follow-up questions from my manager or teammates.

The value is not that AI gives you a beautiful answer. The value is that it creates pressure, exposes weakness, and turns mistakes into the next round of training.

---

## 8) My Recommended Gemini Workflow

If you want the shortest version, use this:

1. use a `Gem` to define the long-term course
2. use `Gemini Live` for daily speaking
3. use `Guided Learning` for reading and concept-heavy materials
4. use `quizzes / flashcards / study guides` for review
5. use `Canvas` for writing and rewriting

The real advantage is not one magical feature. It is the fact that input, output, correction, and review can be connected.

---

## 9) Beyond Gemini: How I Would Split the Tools

If you are willing to use more than one AI tool, I would split them by job rather than arguing about which one is “the best.”

### Gemini

Best as a learning workflow platform:

- guided learning
- quizzes and flashcards
- Canvas
- Live speaking
- custom Gems

### ChatGPT

Best for step-by-step explanation plus project-based organization:

- `Study mode` now gives you a real learning flow with questions, structured explanations, and understanding checks
- `Projects` let you keep files, instructions, and long-term context in one place

Important current limitation:

- OpenAI’s help center explicitly says `Study mode` cannot currently be selected inside a `Project`

So the practical split is:

- use `Projects` to manage your long-term study space
- use regular chats with `Study mode` for focused learning sessions

### Claude

Best for long reading, writing feedback, and style consistency:

- `Projects` give you focused workspaces with knowledge
- `RAG for projects` now expands project capacity across Claude plans

That makes Claude a strong choice if you want to upload lots of articles, essays, email samples, resumes, interview materials, or technical references and keep your writing style consistent.

### Perplexity

Best for finding materials and building reading input:

- `Spaces` are dedicated research workspaces with custom instructions and web/file search

For English learners, I would mainly use it to find current English materials, then pass those materials into Gemini / ChatGPT / Claude for actual learning work.

### DeepL Write

Best as a final polishing layer:

- DeepL officially positions `DeepL Write` as an AI-powered writing assistant

I would use it at the end, not at the beginning:

- to make phrasing more natural
- to adjust tone
- to tighten sentences

Short version:

> Gemini is better for learning workflows, ChatGPT for step-by-step teaching, Claude for long-form reading and writing, Perplexity for finding materials, and DeepL Write for final polish.

---

## 10) More Important Than the Tool: Build Practice Loops

Most people do not get great results from AI because they use it like emergency help.

A better approach is to build repeatable loops.

### 10.1 The 4-step input loop

1. read or listen first by yourself
2. ask AI to explain hard parts and extract useful language
3. summarize or answer in English
4. let AI correct and push further

### 10.2 The 3-step writing loop

1. write your first draft
2. let AI mark the top 3-5 issues
3. rewrite it yourself before looking at the upgraded version

### 10.3 The minimal speaking loop

1. speak for 2-3 minutes
2. fix only 1-2 important problems
3. immediately say it again

This usually works better than receiving 15 pieces of feedback at once.

### 10.4 The vocabulary loop

1. learn new expressions today
2. use them in your own sentences today
3. review them 2-3 days later
4. reuse them in a new situation one week later

### 10.5 Reuse good materials

One good article or video can be reused for:

- reading comprehension
- vocabulary extraction
- dictation
- spoken retelling
- writing imitation

The difference is often not how many materials you find, but how fully you reuse a good one.

### 10.6 A minimal weekly plan

If you want something simple, try this for two weeks:

- Monday: 15 minutes of speaking practice + 10 minutes of corrected repetition
- Tuesday: close reading of one short article + extract 5-10 expressions
- Wednesday: one speaking or interview simulation on the same topic
- Thursday: turn the material into quizzes or flashcards
- Friday: write a short email, summary, or paragraph and revise it twice
- Weekend: review the week’s recurring mistakes

It is not glamorous, but it is sustainable.

---

## 11) Practical Rules When Using AI

1. **Use it as a coach, not an answer machine**
2. **Train one small goal at a time**
3. **Expose your weaknesses instead of hiding them**
4. **Keep a record of good expressions and recurring mistakes**
5. **Verify important claims, subtle usage points, and tricky collocations**
6. **Protect privacy and confidential information**

---

## 12) Sources Behind This Update

This chapter reflects official information available as of `2026-03-20`, including:

- Google’s `Guided Learning in Gemini: From answers to understanding`
- Gemini Help pages for:
  - `Use learning tools in Gemini Apps`
  - `Create quizzes, flashcards & more in Gemini Apps`
  - `Create docs, apps & more with Canvas`
  - `Use Gems in Gemini Apps`
  - `Talk naturally with Gemini Live`
- OpenAI Help pages for:
  - `ChatGPT Study Mode - FAQ`
  - `Projects in ChatGPT`
  - `Voice Mode FAQ`
- Anthropic Help pages for:
  - `What are projects?`
  - `Retrieval augmented generation (RAG) for projects`
  - `Using voice mode`
- Perplexity Help:
  - `What are Spaces?`
- DeepL Help:
  - `DeepL Write` as an AI-powered writing assistant

The main conclusion is:

> Recommending Gemini for English learning makes sense today, but the right recommendation is not “use the premade learning coach.” It is “use Gemini’s current tools to build your own English-learning system.”

And for many serious learners, a **multi-tool workflow** now makes more sense than relying on a single AI product.

---

AI is not a shortcut.

But if you use it well, it can become a low-friction, high-frequency training partner that makes your English learning much more structured and much more sustainable.

---

Prev: [Writing](6-writing.md)  
Next: [Misc](../part-2/x-misc.md)
