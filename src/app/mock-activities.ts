// Types for different question formats
interface TextQuestion {
  type: 'text';
  prompt: string;
}

interface ScaleQuestion {
  type: 'scale';
  statement: string;
  prompt: string;
  options: {
    value: number;
    label: string;
  }[];
}

interface ImportedContentQuestion {
  type: 'imported-content';
  sourceActivity: string;
  prompt?: string;
}

// Interface for screen content
export interface ActivityScreen {
  moduleTitle: string;
  activityTitle: string;
  backgroundImage?: string;
  logo?: boolean;
  content: {
    title?: string;
    text?: string;
    questions?: any[];
    bulletPoints?: string[];
  };
  buttons: {
    text: string;
    action: string;
  }[];
  pageInfo?: {
    current: number;
    total: number;
  };
}

// Main activity interface
export interface Activity {
  id: string;
  module: string;
  screens: {
    start: ActivityScreen;
    pages: ActivityScreen[];
    end: ActivityScreen;
  };
}

const scaleOptions = [
  { value: 1, label: 'Not at all' },
  { value: 2, label: 'A little' },
  { value: 3, label: 'More than a little' },
  { value: 4, label: 'Moderately' },
  { value: 5, label: 'Considerably' },
  { value: 6, label: 'Very much' },
  { value: 7, label: 'Completely' },
];

// Array of all activities
export const activities: Activity[] = [
  // Activity 1: Integration Journal - Capturing the Experience
  {
    id: 'integration-journal-1',
    module: 'Integration Journal',
    screens: {
      start: {
        moduleTitle: 'Integration Journal',
        activityTitle: 'Capturing the Experience Through Writing',
        backgroundImage: 'assets/integration-journal-1.webp',
        content: {
          text: 'After a psychedelic experience, emotions and thoughts can feel intense or scattered. This activity will guide you in a free-writing exercise designed to help release and capture the raw essence of your experience without judgment or structure. Write freely, allowing your reflections to flow without worrying about coherence or form. We will return to your writing in later steps, but for now, focus on releasing your thoughts into words.',
        },
        buttons: [{ text: 'Start', action: 'navigate-next' }],
      },
      pages: [
        {
          moduleTitle: 'Integration Journal',
          activityTitle: 'Capturing the Experience Through Writing',
          logo: true,
          content: {
            title: 'Preparation Instructions',
            text: 'Set aside 15-30 minutes in a quiet, distraction-free space. Here are some ways to prepare:',
            bulletPoints: [
              'If music was played during your session, or if there is a specific track that reminds you of the experience, play it softly.',
              'If you have any meaningful objects from the session, keep them nearby.',
              'If possible, return to the space where the experience occurred to help reconnect with those emotions.',
              'When you are ready, press next to continue.',
            ],
          },
          buttons: [
            { text: 'Prev', action: 'navigate-prev' },
            { text: 'Next', action: 'navigate-next' },
          ],
          pageInfo: { current: 1, total: 3 },
        },
        {
          moduleTitle: 'Integration Journal',
          activityTitle: 'Capturing the Experience Through Writing',
          logo: true,
          content: {
            title: 'Guidelines and Tips',
            text: "Now, take a deep breath and prepare to write freely. Don't worry about structure, coherence, or making sense of your thoughts. This is an exercise in emotional release and self-expression, a recording of the experience from your subjective point of view. You don't need to make sense of the events or organize them—Your writing will be saved for future activities. For now, just let the experience unfold in your writing. This phase is important as the details of these experiences often fade from memory quickly. When you're ready to start, press \"Next\" and begin.",
          },
          buttons: [
            { text: 'Prev', action: 'navigate-prev' },
            { text: 'Next', action: 'navigate-next' },
          ],
          pageInfo: { current: 2, total: 3 },
        },
        {
          moduleTitle: 'Integration Journal',
          activityTitle: 'Capturing the Experience Through Writing',
          logo: true,
          content: {
            title: "Let's write!",
            questions: [
              {
                type: 'text',
                prompt:
                  'Write freely about your experience without any concerns for structure. Try to recall the events that took place and focus on expressing your emotions, sensations, and memories as they happened and as you interpreted them at the time. No detail is too small or large, write down anything that comes to mind. Consider writing in chronological order, if it helps.',
              },
            ],
          },
          buttons: [
            { text: 'Prev', action: 'navigate-prev' },
            { text: 'Finish', action: 'finish-activity' },
          ],
          pageInfo: { current: 3, total: 3 },
        },
      ],
      end: {
        moduleTitle: 'Integration Journal',
        activityTitle: 'Capturing the Experience Through Writing',
        logo: true,
        content: {
          text: "Congratulations! You've completed your post-experience free-writing exercise. Your words will be saved for your future reflection. In the upcoming activities, we'll revisit your writing in a more structured way to deepen your integration process.",
        },
        buttons: [
          { text: 'Review Answers', action: 'review' },
          { text: 'Download Results', action: 'download' },
          { text: 'My Voyage', action: 'navigate-home' },
        ],
      },
    },
  },

  // Activity 2: Integration Journal - Meaning Making
  {
    id: 'integration-journal-2',
    module: 'Integration Journal',
    screens: {
      start: {
        moduleTitle: 'Integration Journal',
        activityTitle: 'Meaning making and identifying themes',
        backgroundImage: 'assets/integration-journal-2.webp',
        content: {
          text: "In this activity, you'll try to understand the main themes that arose for you during the experience and reflect on how it differed from your daily life.",
        },
        buttons: [{ text: 'Start', action: 'navigate-next' }],
      },
      pages: [
        {
          moduleTitle: 'Integration Journal',
          activityTitle: 'Meaning making and identifying themes',
          logo: true,
          content: {
            title: 'Post-Experience Capture Review',
            text: "Let's begin by revisiting the 'Immediate Post-Experience Capture' activity that you completed shortly after your experience. As you re-read your experience report, try to identify themes and patterns that you feel were important to you during the experience and recording. Perhaps they generated a strong emotional response, were mentioned several times, or simply resonate with you now. It's fine if some of what you wrote doesn't make sense right now, or is less relatable. Try to pick out elements that you felt were important to you, and avoid judging or categorizing them too rigidly.",
            questions: [
              {
                type: 'imported-content',
                sourceActivity: 'integration-journal-1',
              },
            ],
          },
          buttons: [
            { text: 'Prev', action: 'navigate-prev' },
            { text: 'Next', action: 'navigate-next' },
          ],
          pageInfo: { current: 1, total: 3 },
        },
        {
          moduleTitle: 'Integration Journal',
          activityTitle: 'Meaning making and identifying themes',
          logo: true,
          content: {
            title: 'Theme and Pattern Notation',
            text: "Now let's write down your conclusions. Identifying themes and patterns is part of the process of 'meaning making' and will serve as a basis for later integration of the experience into your daily life.",
            questions: [
              {
                type: 'text',
                prompt: "Write down the themes and patterns you've identified:",
              },
            ],
          },
          buttons: [
            { text: 'Prev', action: 'navigate-prev' },
            { text: 'Next', action: 'navigate-next' },
          ],
          pageInfo: { current: 2, total: 3 },
        },
        {
          moduleTitle: 'Integration Journal',
          activityTitle: 'Meaning making and identifying themes',
          logo: true,
          content: {
            title: 'Contrasting your Experience with Everyday Life',
            text: 'Take a few minutes to reflect on how your psychedelic experience differed from your regular life. Think about your Everyday experiences, sensations, or emotions. Can you notice any themes that were present during the experience which are usually absent or diminished during your everyday life? Or vice-versa - themes that were absent from your experience that you encounter on a regular basis normally?',
            questions: [
              {
                type: 'text',
                prompt: 'Write your reflections here:',
              },
            ],
          },
          buttons: [
            { text: 'Prev', action: 'navigate-prev' },
            { text: 'Finish', action: 'finish-activity' },
          ],
          pageInfo: { current: 3, total: 3 },
        },
      ],
      end: {
        moduleTitle: 'Integration Journal',
        activityTitle: 'Meaning making and identifying themes',
        logo: true,
        content: {
          text: "Congratulations! You've begun to make sense and meaning of your experience, as you understand it, and also have made your first steps toward noticing patterns in this experience and how it compares to your regular life. In upcoming activities we will work towards integrating aspects of these changes into your daily life",
        },
        buttons: [
          { text: 'Review Answers', action: 'review' },
          { text: 'Download Results', action: 'download' },
          { text: 'My Voyage', action: 'navigate-home' },
        ],
      },
    },
  },

  // Activity 3: Integration Journal - Integrating Insights
  {
    id: 'integration-journal-3',
    module: 'Integration Journal',
    screens: {
      start: {
        moduleTitle: 'Integration Journal',
        activityTitle: 'Integrating Insights Into Routine',
        backgroundImage: 'assets/integration-journal-3.webp',
        content: {
          text: "In this activity, you will reflect on how the insights from your psychedelic experience can be integrated into your daily life. Through structured reflection, you'll begin connecting key themes from past exercises to practical actions.",
        },
        buttons: [{ text: 'Start', action: 'navigate-next' }],
      },
      pages: [
        {
          moduleTitle: 'Integration Journal',
          activityTitle: 'Integrating Insights Into Routine',
          logo: true,
          content: {
            title: 'Introduction',
            text: "Let's begin by revisiting your reflections from the Integration Journal's Meaning Making and Identifying Themes activity.",
            questions: [
              {
                type: 'imported-content',
                sourceActivity: 'integration-journal-2',
                prompt:
                  'Take a moment to re-read what you wrote without judgment. Notice any themes, ideas, or patterns that stand out.',
              },
            ],
          },
          buttons: [
            { text: 'Prev', action: 'navigate-prev' },
            { text: 'Next', action: 'navigate-next' },
          ],
          pageInfo: { current: 1, total: 3 },
        },
        {
          moduleTitle: 'Integration Journal',
          activityTitle: 'Integrating Insights Into Routine',
          logo: true,
          content: {
            title: 'Reflecting on Key Themes',
            text: 'Consider the main themes and insights that emerged as you read through your prior reflections. Reflect on conclusions from these themes that might inspire change in your life. These realizations could stem from various experiences or emotions. For instance: A sense of apprehension during the experience might suggest a need to become more comfortable with uncertainty. An overwhelming feeling of love for a person or place may highlight the importance of spending more time with them. Take a moment to write down the conclusions that feel most significant. Focus only on what these conclusions are, not yet on how to implement them.',
            questions: [
              {
                type: 'text',
                prompt: 'Write your reflections here:',
              },
            ],
          },
          buttons: [
            { text: 'Prev', action: 'navigate-prev' },
            { text: 'Next', action: 'navigate-next' },
          ],
          pageInfo: { current: 2, total: 3 },
        },
        {
          moduleTitle: 'Integration Journal',
          activityTitle: 'Integrating Insights Into Routine',
          logo: true,
          content: {
            title: 'Small Steps for Implementation',
            text: "Reflect on the changes you'd like to implement. How can these ideas be introduced into your daily life in practical, small ways? For example, you might set a reminder to reconnect with a beloved person or take time for a personal activity. Implementing new behaviors can be challenging, and it's okay not to have all the answers. Remember, this is a process, and we'll revisit this question in the future.",
            questions: [
              {
                type: 'text',
                prompt: 'Write your implementation ideas here:',
              },
            ],
          },
          buttons: [
            { text: 'Prev', action: 'navigate-prev' },
            { text: 'Finish', action: 'finish-activity' },
          ],
          pageInfo: { current: 3, total: 3 },
        },
      ],
      end: {
        moduleTitle: 'Integration Journal',
        activityTitle: 'Integrating Insights Into Routine',
        logo: true,
        content: {
          text: "You've completed your reflection on integrating your insights into daily life. This step is essential, as the experience itself fades over time, yet the insights you build on now are likely to lead to long-lasting positive change.",
        },
        buttons: [
          { text: 'Review Answers', action: 'review' },
          { text: 'Download Results', action: 'download' },
          { text: 'My Voyage', action: 'navigate-home' },
        ],
      },
    },
  },

  {
    id: 'preparedness-questionnaire',
    module: 'Psychedelic Preparedness Questionnaire',
    screens: {
      start: {
        moduleTitle: 'Psychedelic Preparedness Questionnaire Module',
        activityTitle: 'Voyage Initiation Preparedness Questionnaire',
        backgroundImage: 'assets/preparedness-questionnaire.webp',
        content: {
          text: 'This activity helps assess your readiness for a psychedelic experience by measuring preparedness in knowledge, intentions, emotional readiness, and physical preparedness. We will track your preparedness levels as your voyage progresses. Please answer truthfully.',
        },
        buttons: [{ text: 'Start', action: 'navigate-next' }],
      },
      pages: [
        {
          moduleTitle: 'Psychedelic Preparedness Questionnaire Module',
          activityTitle: 'Voyage Initiation Preparedness Questionnaire',
          logo: true,
          backgroundImage: 'low-contrast-contemplative-landscape.jpg',
          content: {
            title: 'Research and Knowledge',
            text: 'Please rate the following statement on a scale from 1 (Not at all) to 7 (Completely).',
            questions: [
              {
                type: 'scale',
                statement:
                  'I have done some of my own research into the effects of the psychedelic substance (e.g., reading articles/books).',
                options: scaleOptions,
              },
            ],
          },
          buttons: [
            { text: 'Prev', action: 'navigate-prev' },
            { text: 'Next', action: 'navigate-next' },
          ],
          pageInfo: { current: 1, total: 10 },
        },
        {
          moduleTitle: 'Psychedelic Preparedness Questionnaire Module',
          activityTitle: 'Voyage Initiation Preparedness Questionnaire',
          logo: true,
          backgroundImage: 'low-contrast-contemplative-landscape.jpg',
          content: {
            questions: [
              {
                type: 'scale',
                statement:
                  'I have a clear intention for the psychedelic experience.',
                options: scaleOptions,
              },
            ],
          },
          buttons: [
            { text: 'Prev', action: 'navigate-prev' },
            { text: 'Next', action: 'navigate-next' },
          ],
          pageInfo: { current: 2, total: 10 },
        },
        {
          moduleTitle: 'Psychedelic Preparedness Questionnaire Module',
          activityTitle: 'Voyage Initiation Preparedness Questionnaire',
          logo: true,
          backgroundImage: 'low-contrast-contemplative-landscape.jpg',
          content: {
            questions: [
              {
                type: 'scale',
                statement:
                  'I have carefully contemplated my reasons for taking a psychedelic substance.',
                options: scaleOptions,
              },
            ],
          },
          buttons: [
            { text: 'Prev', action: 'navigate-prev' },
            { text: 'Next', action: 'navigate-next' },
          ],
          pageInfo: { current: 3, total: 10 },
        },
        {
          moduleTitle: 'Psychedelic Preparedness Questionnaire Module',
          activityTitle: 'Voyage Initiation Preparedness Questionnaire',
          logo: true,
          backgroundImage: 'low-contrast-contemplative-landscape.jpg',
          content: {
            questions: [
              {
                type: 'scale',
                statement:
                  'I know that my experience will be somewhat unpredictable.',
                options: scaleOptions,
              },
            ],
          },
          buttons: [
            { text: 'Prev', action: 'navigate-prev' },
            { text: 'Next', action: 'navigate-next' },
          ],
          pageInfo: { current: 4, total: 10 },
        },
        {
          moduleTitle: 'Psychedelic Preparedness Questionnaire Module',
          activityTitle: 'Voyage Initiation Preparedness Questionnaire',
          logo: true,
          backgroundImage: 'low-contrast-contemplative-landscape.jpg',
          content: {
            questions: [
              {
                type: 'scale',
                statement:
                  'I have spoken with a therapist/counselor as part of my preparation for the psychedelic experience.',
                options: scaleOptions,
              },
            ],
          },
          buttons: [
            { text: 'Prev', action: 'navigate-prev' },
            { text: 'Next', action: 'navigate-next' },
          ],
          pageInfo: { current: 5, total: 10 },
        },
        {
          moduleTitle: 'Psychedelic Preparedness Questionnaire Module',
          activityTitle: 'Voyage Initiation Preparedness Questionnaire',
          logo: true,
          backgroundImage: 'low-contrast-contemplative-landscape.jpg',
          content: {
            questions: [
              {
                type: 'scale',
                statement:
                  'I am prepared to deal with uncomfortable and challenging aspects of the psychedelic experience.',
                options: scaleOptions,
              },
            ],
          },
          buttons: [
            { text: 'Prev', action: 'navigate-prev' },
            { text: 'Next', action: 'navigate-next' },
          ],
          pageInfo: { current: 6, total: 10 },
        },
        {
          moduleTitle: 'Psychedelic Preparedness Questionnaire Module',
          activityTitle: 'Voyage Initiation Preparedness Questionnaire',
          logo: true,
          backgroundImage: 'low-contrast-contemplative-landscape.jpg',
          content: {
            questions: [
              {
                type: 'scale',
                statement:
                  'I am prepared for the physical effects of the psychedelic.',
                options: scaleOptions,
              },
            ],
          },
          buttons: [
            { text: 'Prev', action: 'navigate-prev' },
            { text: 'Next', action: 'navigate-next' },
          ],
          pageInfo: { current: 7, total: 10 },
        },
        {
          moduleTitle: 'Psychedelic Preparedness Questionnaire Module',
          activityTitle: 'Voyage Initiation Preparedness Questionnaire',
          logo: true,
          backgroundImage: 'low-contrast-contemplative-landscape.jpg',
          content: {
            questions: [
              {
                type: 'scale',
                statement: 'I feel the substance will be safe to take.',
                options: scaleOptions,
              },
            ],
          },
          buttons: [
            { text: 'Prev', action: 'navigate-prev' },
            { text: 'Next', action: 'navigate-next' },
          ],
          pageInfo: { current: 8, total: 10 },
        },
        {
          moduleTitle: 'Psychedelic Preparedness Questionnaire Module',
          activityTitle: 'Voyage Initiation Preparedness Questionnaire',
          logo: true,
          backgroundImage: 'low-contrast-contemplative-landscape.jpg',
          content: {
            questions: [
              {
                type: 'scale',
                statement:
                  'I trust my own mind and body to safely process the experience.',
                options: scaleOptions,
              },
            ],
          },
          buttons: [
            { text: 'Prev', action: 'navigate-prev' },
            { text: 'Next', action: 'navigate-next' },
          ],
          pageInfo: { current: 9, total: 10 },
        },
        {
          moduleTitle: 'Psychedelic Preparedness Questionnaire Module',
          activityTitle: 'Voyage Initiation Preparedness Questionnaire',
          logo: true,
          backgroundImage: 'low-contrast-contemplative-landscape.jpg',
          content: {
            questions: [
              {
                type: 'scale',
                statement:
                  'I am aware that the psychedelic experience might change me in some way.',
                options: scaleOptions,
              },
            ],
          },
          buttons: [
            { text: 'Prev', action: 'navigate-prev' },
            { text: 'Finish', action: 'finish-activity' },
          ],
          pageInfo: { current: 10, total: 10 },
        },
      ],
      end: {
        moduleTitle: 'Psychedelic Preparedness Questionnaire Module',
        activityTitle: 'Voyage Initiation Preparedness Questionnaire',
        logo: true,
        backgroundImage: 'low-contrast-contemplative-landscape.jpg',
        content: {
          text: 'Congratulations! You have completed the Psychedelic Preparedness Questionnaire. Tracking your preparedness allows us to better support your unique journey.',
        },
        buttons: [
          { text: 'Review Answers', action: 'review' },
          { text: 'Download Results', action: 'download' },
          { text: 'My Voyage', action: 'navigate-home' },
        ],
      },
    },
  },
];
