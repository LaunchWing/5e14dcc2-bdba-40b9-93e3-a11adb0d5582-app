import { validateRequest } from '../../functions/api/validateRequest';
import { generateOperationalGuidance } from '../../functions/api/generateOperationalGuidance';

export async function OperationalGuidanceBackendHandler(req: Request): Promise<Response> {
  try {
    const { isValid, errorMessage } = validateRequest(req);
    if (!isValid) {
      return new Response(JSON.stringify({ error: errorMessage }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const guidance = await generateOperationalGuidance(req);
    return new Response(JSON.stringify({ guidance }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}