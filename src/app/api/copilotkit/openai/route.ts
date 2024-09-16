import { CopilotBackend, OpenAIAdapter } from "@copilotkit/backend";
//import { CopilotRuntime, GoogleGenerativeAIAdapter } from "@copilotkit/runtime";

export const runtime = "edge";

export async function POST(req: Request): Promise<Response> {
  const copilotKit = new CopilotBackend();

  return copilotKit.response(req, new OpenAIAdapter({model:"gpt-4"}));
}
