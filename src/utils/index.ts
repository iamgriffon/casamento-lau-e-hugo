export function generateHexID(): string {
  let code = '';
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 6; i++) {
      code += caracteres.charAt(Math.floor(Math.random() * caracteres.length)).toUpperCase();
  }
  return code;
}