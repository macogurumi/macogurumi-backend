import { GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai';
import { Provider } from '@nestjs/common';
import { env } from '~configs/env.config';
import { GEMINI_GENERATION_CONFIG, GEMINI_SAFETY_SETTINGS } from '~configs/gemini.config';
import { GEMINI_PRO_MODEL } from './gemini.constant';

export const GeminiProModelProvider: Provider<GenerativeModel> = {
  provide: GEMINI_PRO_MODEL,
  useFactory: () => {
    const genAI = new GoogleGenerativeAI(env.GEMINI.KEY);
    return genAI.getGenerativeModel({
      model: env.GEMINI.PRO_MODEL,
      generationConfig: GEMINI_GENERATION_CONFIG,
      safetySettings: GEMINI_SAFETY_SETTINGS,
    });
  },
};