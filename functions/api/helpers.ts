export function validateTemplateId(templateId: string): boolean {
  const validTemplates = ['template1', 'template2', 'template3'];
  return validTemplates.includes(templateId);
}

export function validateCustomizationOptions(options: Record<string, unknown>): boolean {
  // Basic validation logic for customization options
  return options && typeof options === 'object';
}