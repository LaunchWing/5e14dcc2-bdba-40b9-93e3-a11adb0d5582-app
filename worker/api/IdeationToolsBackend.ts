import { validateRequest } from '../../functions/api/validateRequest';
import { handleIdeation } from '../../functions/api/handleIdeation';

export async function IdeationToolsBackendHandler(req: Request): Promise<Response> {
  try {
    if (req.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
    }

    const validationError = validateRequest(req);
    if (validationError) {
      return new Response(JSON.stringify({ error: validationError }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const response = await handleIdeation(req);
    return new Response(JSON.stringify(response), { status: 200, headers: { 'Content-Type': 'application/json' } });

  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
