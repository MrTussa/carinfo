// import { NextRequest, NextResponse } from 'next/server';
// import { Configuration, OpenAIApi } from 'openai';

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

// export async function POST(req: NextRequest) {
//   const { message } = await req.json();

//   if (!message) {
//     return NextResponse.json({ error: 'Message is required' }, { status: 400 });
//   }

//   try {
//     const response = await openai.createChatCompletion({
//       model: 'gpt-3.5-turbo',
//       messages: [{ role: 'user', content: message }],
//     });

//     const reply = response.data.choices[0]?.message?.content || 'No response';
//     return NextResponse.json({ reply });
//   } catch (error) {
//     console.error('OpenAI API error:', error);
//     return NextResponse.json({ error: 'Failed to fetch response' }, { status: 500 });
//   }
// }
