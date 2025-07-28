export function validateBusinessPlanRequest(body: BusinessPlanRequest): string | null {
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

type BusinessPlanRequest = {
  businessIdea: string;
  targetMarket: string;
  revenueModel: string;
};