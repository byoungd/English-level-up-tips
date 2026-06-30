# Learning Anything with AI (June 2026 Edition)

中文: <a href="#/threads/part-3/1-ai-learning">使用 AI 学习一切</a>

> This chapter is based on official sources available around `2026-06-29`. AI products change quickly. Feature names, availability, regional access, and plan limits may keep changing, so always check official sources for important study, work, exam, or business decisions.

A few years ago, using AI for learning mostly meant asking a question and getting an answer.

That is no longer the highest-leverage use.

> **Use AI as a learning system, not as an answer machine.**

A useful AI learning system should help you do seven things:

1. define the goal: what exactly you want to be able to do;
2. organize materials: books, articles, documents, videos, notes, code, and real cases;
3. explain step by step: break down hard ideas instead of dumping conclusions;
4. force output: make you retell, solve, write, code, present, or build;
5. correct mistakes: identify the highest-impact issues and make you try again;
6. review over time: turn knowledge into quizzes, cards, checklists, and retrospectives;
7. ship projects: produce real artifacts instead of stopping at “I understand.”

English learning is only one use case. Programming, writing, exams, industry research, product planning, sales training, management practice, agriculture, operations, and creator work can all use the same underlying loop.

---

## 1. Turn “I Want to Learn” Into a Trainable Goal

Do not start with:

> I want to learn programming. What should I do?

That question is too broad. AI will usually return a correct but generic list.

Start by defining four things:

1. **Outcome**: what you will produce;
2. **Context**: where you will use the skill;
3. **Time**: how many weeks and hours you can invest;
4. **Evidence**: what artifact or performance proves you learned it.

Example:

> I want to learn Python in 8 weeks. My goal is not to memorize syntax, but to build a small tool that cleans Excel files and generates reports.  
> I can study 5 hours per week. Please design weekly tasks. Each week must end with a runnable mini-project and clear acceptance criteria.

Or:

> I want to learn industry research. In 4 weeks, I want to write a 10-page report about one industry. Please design a learning path covering source collection, conceptual framework, case analysis, data verification, report outline, and final presentation.

Real learning starts when you stop collecting resources and begin moving toward evidence of ability.

---

## 2. How to Split the Tools

Do not waste energy arguing which AI tool is the single best one.

Split them by job.

### Gemini: learning workflows

Gemini's current learning tools, quizzes, flashcards, study guides, Canvas, Gems, and Gemini Live make it useful for turning materials into lessons, lessons into review, and review into output.

Use it for:

- turning articles, videos, notes, and documents into study guides;
- generating quizzes, flashcards, and staged practice;
- editing writing, plans, scripts, and talks in Canvas;
- creating a reusable learning coach with Gems;
- using Live for spoken explanation, Q&A, rehearsal, and retelling.

Prompt:

> You are my AI learning coach. Turn this material into a 30-minute lesson. Ask me 3 preview questions first, then explain it in 4 sections. After each section, give me 2 comprehension checks. At the end, ask me to explain the core idea in my own words.

### ChatGPT: step-by-step learning and project memory

OpenAI's `Study mode` is designed around questions, layered explanations, understanding checks, and active participation. `Projects` are useful for keeping long-term learning files, instructions, and context in one place.

Use it for:

- learning abstract concepts;
- working through problems or cases;
- turning PDFs, images, and notes into learning tasks;
- keeping mistakes, materials, exercises, and artifacts inside a long-running Project.

Prompt:

> Teach me this concept in a Study Mode style. Do not give the final answer immediately. First ask what I already understand, then explain with a simple example, then give me a small exercise and correct my response.

### Claude: long documents, writing, and large material sets

Claude Projects and project knowledge are useful for working with batches of longer materials. RAG for projects helps project knowledge be retrieved and used at larger scale. Claude is especially strong for long reading, writing feedback, style consistency, and complex material organization.

Use it for:

- reading long reports, papers, and documentation;
- comparing arguments across several sources;
- improving essays, resumes, proposals, and plans;
- maintaining a long-term writing or research project.

Prompt:

> I will upload 5 industry sources. Do not write the report yet. First build a concept table: key terms, major players, main disputes, data definitions, and questionable claims. For every point, say which source it comes from.

### NotebookLM: source-grounded study

NotebookLM is most useful when learning from sources you provide or collect. It can help turn materials into Q&A, summaries, study guides, flashcards, quizzes, and audio overviews.

Use it for:

- studying lecture notes, book excerpts, papers, and industry reports;
- asking questions within a fixed set of sources;
- reducing unsupported speculation;
- preparing material before using another AI tool for practice or output.

Prompt:

> Answer only from the sources I provided. Where do these materials agree, where do they disagree, and what still needs external verification?

### Perplexity: web research and source discovery

Perplexity Spaces are research workspaces with custom instructions, web search, and file organization. Perplexity is better for finding materials, following current information, and building sourced reading input than for being your main training coach.

Use it for:

- finding recent materials on a topic;
- comparing multiple viewpoints;
- building reading lists;
- starting industry research, paper topics, or product discovery.

Prompt:

> Find authoritative 2025-2026 sources about AI's impact on workplace skills. Prioritize official institutions, research reports, and primary sources. Rank them by reliability and explain what each source is useful for.

### DeepL Write: final language polish

DeepL Write is best near the end of a writing process, when you want to improve wording, tone, clarity, and naturalness.

Use it for:

- English email;
- applications;
- resumes and LinkedIn copy;
- external posts, explanations, and report summaries.

It should not replace your thinking, structure, or practice. Write first, polish later.

---

## 3. The Universal AI Learning Loop

Whatever you are learning, start with this seven-step loop.

### Step 1: Bring real material

Give AI concrete material instead of asking it to lecture from nowhere.

Useful materials include:

- a book chapter;
- a paper or report;
- a course transcript;
- code;
- a work document;
- exam questions;
- a real business problem.

Prompt:

> Read this material first. Do not summarize yet. Tell me what problem it helps solve, what it does not cover, and what prerequisites I need.

### Step 2: Use active recall

Do not let AI explain everything first. Let it test you.

Prompt:

> Before explaining, ask me 5 questions to check my current understanding. Based on my answers, decide what I need to learn first.

Active recall is harder than passive reading, but it helps knowledge stick.

### Step 3: Ask for layered explanation

Ask for levels, not a giant answer.

Prompt:

> Explain this concept in 4 layers: one-sentence explanation, everyday analogy, professional definition, and real example. After each layer, ask me one check question.

### Step 4: Produce something

Without output, learning easily becomes an illusion.

Output can be:

- a summary;
- a solved problem;
- a small program;
- one slide;
- a process design;
- a short recording;
- an explanation to someone else.

Prompt:

> Stop explaining now. Give me a task I can finish in 30 minutes to prove I understand this concept. After I finish, evaluate it for clarity, accuracy, and transferability.

### Step 5: Get focused correction

Ask AI to correct less, but correct what matters.

Prompt:

> Point out only the 3 issues that most affect quality. For each issue, explain why it matters, suggest a fix, and give me a small exercise to redo immediately.

### Step 6: Review over time

Feeling clear today does not mean you can use it three days later.

Prompt:

> Turn today's learning into 10 review cards, 5 application questions, and a one-week review checklist. Mix concept checks, practical application, and common mistakes.

### Step 7: Ship a project

Always return to an artifact.

Prompt:

> Turn this learning topic into a 2-week project. It must have a final deliverable, milestones, acceptance criteria, and reflection questions. Do not make it only a reading plan.

Once you have a deliverable, learning changes from “I consumed a lot” to “I built something.”

---

## 4. Five High-Value Templates

### 4.1 Programming: build tools, not syntax lists

Do not ask AI for a long syntax syllabus. Ask it to help you build a small project.

Prompt:

> I want to learn JavaScript, but my goal is to build a small web tool. Design a 4-week plan: one runnable project per week, introducing only the syntax needed for that project. At the end of each week, review my code and identify my top 3 issues.

Practice loop:

- let AI explain the minimum concept;
- write the first version yourself;
- ask AI for code review;
- revise it yourself;
- add one small feature to transfer the knowledge.

### 4.2 Writing: train judgment, not outsourcing

The danger in writing is outsourcing thought.

Prompt:

> I will write the first draft myself. Do not rewrite it immediately. Diagnose the draft: clarity of thesis, structure, strength of examples, and unnecessary wording. Give only the 5 most important suggestions, then ask me to write a second draft.

Practice loop:

- write the first draft yourself;
- let AI diagnose only;
- revise it yourself;
- compare with a stronger version later;
- save reusable structures and expressions.

### 4.3 Exams and certificates: build an error system

Exam preparation is mostly about understanding why you get things wrong.

Prompt:

> I will upload a set of wrong answers. Do not just give correct answers. Classify each error as concept gap, reading mistake, calculation/detail error, transfer failure, or time-management issue. Then design a one-week review plan.

Practice loop:

- classify mistakes;
- practice similar questions;
- let AI create variations;
- simulate under time pressure;
- track whether error types decrease.

### 4.4 Industry research: build judgment, not link piles

Research is not a pile of links. It is a way to build judgment.

Prompt:

> Help me research an industry. First build an analysis framework: market size, demand change, supply structure, policy variables, technology variables, business models, key companies, and risks. For each part, say what data is needed and which conclusions cannot be based only on news.

Practice loop:

- use Perplexity to discover sources;
- use NotebookLM or Claude to study fixed sources;
- use ChatGPT or Gemini to unpack concepts and outline;
- write the report yourself;
- ask AI to challenge your conclusion as an investor, customer, or manager.

### 4.5 Work output: turn vague thoughts into deliverables

At work, AI is not just for writing emails. It is useful for turning messy thinking into clear output.

Prompt:

> I need to prepare a project update. Ask me 8 clarification questions first: goal, audience, current status, problem, proposal, cost, risk, and next step. Then create an outline. Do not write the full draft immediately.

Practice loop:

- let AI ask questions first;
- fill in facts yourself;
- let AI structure the answer;
- write the first draft yourself;
- let AI simulate audience pushback;
- polish language and format at the end.

---

## 5. A Minimal Weekly Plan

If you do not know where to start, pick one topic and run this for one week.

### Monday: define the goal

> What will I learn this week, and what will I deliver?

Output: one verifiable goal and a material list.

### Tuesday: study the material

> Let AI break down the material, ask questions, and explain hard parts.

Output: one page of notes and 5 key concepts.

### Wednesday: produce

> Write code, write an essay, solve problems, outline a report, or record an explanation.

Output: first draft or first version.

### Thursday: correct

> Let AI identify the 3 most important issues, then redo the work yourself.

Output: second version and error list.

### Friday: transfer

> Use the same idea in a different context.

Output: one variation exercise or new case.

### Weekend: review

> Summarize what you learned, what you still cannot do, and what comes next.

Output: review cards, next-week plan, and a clearer project goal.

This is plain, but it prevents the most common failure: talking to AI every day while retaining nothing.

---

## 6. Boundaries: The Better You Use AI, the More You Must Verify

### 6.1 Do not outsource factual judgment

AI can invent sources, miss context, or mix old and new information. For law, medicine, finance, policy, exams, and business decisions, go back to official sources, primary documents, and qualified professionals.

### 6.2 Protect privacy and confidential data

Resumes, contracts, customer data, company documents, unpublished plans, and student information should be sanitized first. Use summaries when possible. Remove identity details when possible.

### 6.3 Do not let AI produce everything for you

If AI writes, revises, summarizes, and explains everything, you may become better at operating AI without becoming better at thinking. Keep at least one step as your own work: explain, write, solve, build, or teach.

### 6.4 Respect academic integrity and exam rules

Schools, exams, papers, assignments, and hiring tests have their own AI rules. Use AI to understand, practice, and review. Do not submit prohibited AI output as independent work.

### 6.5 Date your sources

AI tools, model capabilities, policies, and industry data keep changing. In notes and reports, date your source base:

> Prepared on 2026-06-29, based on public sources available that day.

That small line reminds you that many conclusions have a time boundary.

---

## 7. Official Sources

This chapter is mainly based on official pages and authoritative sources available around `2026-06-29`:

- Gemini:
  - [Use learning tools in Gemini Apps](https://support.google.com/gemini/answer/16448384)
  - [Create quizzes, flashcards & more in Gemini Apps](https://support.google.com/gemini/answer/16275879)
  - [Create docs, apps & more with Canvas](https://support.google.com/gemini/answer/16047321)
  - [Use Gems in Gemini Apps](https://support.google.com/gemini/answer/15146780)
  - [Talk naturally with Gemini Live](https://support.google.com/gemini/answer/15274899)
- ChatGPT:
  - [ChatGPT Study Mode - FAQ](https://help.openai.com/en/articles/11780217-chatgpt-study-mode-faq)
  - [Projects in ChatGPT](https://help.openai.com/en/articles/10169521-projects-in-chatgpt)
- Claude:
  - [What are projects?](https://support.claude.com/en/articles/9517075-what-are-projects)
  - [Retrieval augmented generation (RAG) for projects](https://support.claude.com/en/articles/11473015-retrieval-augmented-generation-rag-for-projects)
  - [Using voice mode](https://support.claude.com/en/articles/11101966-use-voice-mode)
- NotebookLM, Perplexity, DeepL:
  - [NotebookLM notebooks](https://support.google.com/notebooklm/answer/16206563?hl=en)
  - [NotebookLM source-grounded chat](https://support.google.com/notebooklm/answer/16179559?hl=en)
  - [NotebookLM flashcards and quizzes](https://support.google.com/notebooklm/answer/16958963?hl=en)
  - [What are Spaces?](https://www.perplexity.ai/help-center/en/articles/10352961-what-are-spaces)
  - [About DeepL Write](https://support.deepl.com/hc/en-us/articles/6318834492700-About-DeepL-Write)
- Education and work context:
  - [UNESCO AI competency framework for students](https://www.unesco.org/en/articles/ai-competency-framework-students)
  - [UNESCO Guidance for generative AI in education and research](https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research)
  - [World Economic Forum: The Future of Jobs Report 2025](https://www.weforum.org/publications/the-future-of-jobs-report-2025/)

---

## 8. Closing

AI will not automatically make you stronger. It amplifies your learning method.

If you only ask for answers, it will help you get answers faster and forget them faster.

If you turn it into a training system, it can help you read, question, practice, correct, review, and ship.

The important question is not:

> Which model did I use?

The important question is:

> **Did I use AI to build a learning loop that keeps moving me forward?**

That is one of the most valuable abilities ordinary people can develop in the AI era.

---

Prev: [Learning English with AI](../part-1/7-ai.md)  
Next: [Misc](../part-2/x-misc.md)
