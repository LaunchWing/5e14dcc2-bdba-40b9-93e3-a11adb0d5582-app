export function generateBusinessPlan(request: BusinessPlanRequest): object {
  // Mock implementation of a business plan generation
  return {
    summary: `Business Plan for ${request.businessIdea}`,
    targetMarketAnalysis: `Target market: ${request.targetMarket}`,
    revenueStrategy: `Revenue model: ${request.revenueModel}`
  };
}

type BusinessPlanRequest = {
  businessIdea: string;
  targetMarket: string;
  revenueModel: string;
};