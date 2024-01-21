import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
  dangerouslyAllowBrowser: true,
});

export default async function myfunc(req, res) {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ error: { message: 'No files were uploaded.' } });
    }

    const imageFile = req.files.image; // Assuming the file input name is 'image'
    const image_url = imageFile ? imageFile.path : null;

    if (!image_url) {
      return res.status(500).json({
        error: {
          message: 'No image provided',
        },
      });
    }

    if (!openai.apiKey) {
      return res.status(500).json({
        error: {
          message: 'OpenAI API key not configured, please follow instructions in README.md',
        },
      });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4-vision-preview",
      messages: [
        {
          role: "user",
          content: [
            { type: "text", text: "What’s in this image?" },
            {
              type: "image_url",
              image_url: {
                "url": image_url,
              },
            },
          ],
        },
      ],
    });

    const answer = response.choices[0].message.content;

    res.status(200).json({
      content: answer,
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: { message: 'An error occurred' } });
  }
}
