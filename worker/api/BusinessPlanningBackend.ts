export async function BusinessPlanningBackendHandler(req: Request): Promise<Response> {
  try {
    const { method } = req;
    if (method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers: { 'Content-Type': 'application/json' } });
    }

    const contentType = req.headers.get('Content-Type') || '';
    if (!contentType.includes('application/json')) {
      return new Response(JSON.stringify({ error: 'Unsupported Media Type' }), { status: 415, headers: { 'Content-Type': 'application/json' } });
    }

    const body: BusinessPlanRequest = await req.json();

    const validationError = validateBusinessPlanRequest(body);
    if (validationError) {
      return new Response(JSON.stringify({ error: validationError }), { status: 400, headers: { 'Content-Type': 'application/json' } });
    }

    const businessPlan = generateBusinessPlan(body);

    return new Response(JSON.stringify({ businessPlan }), { status: 200, headers: { 'Content-Type': 'application/json' } });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Internal Server Error', details: error.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}

type BusinessPlanRequest = {
  businessIdea: string;
  targetMarket: string;
  revenueModel: string;
};

function validateBusinessPlanRequest(body: BusinessPlanRequest): string | null {
  if (!body.businessIdea) {
    return 'Business idea is required.';
  }
  if (!body.targetMarket) {
    return 'Target market is required.';
  }
  if (!body.revenueModel) {
    return 'Revenue model is required.';
  }
  return null;
}

function generateBusinessPlan(request: BusinessPlanRequest): object {
  // Mock implementation of a business plan generation
  return {
    summary: `Business Plan for ${request.businessIdea}`,
    targetMarketAnalysis: `Target market: ${request.targetMarket}`,
    revenueStrategy: `Revenue model: ${request.revenueModel}`
  };
}