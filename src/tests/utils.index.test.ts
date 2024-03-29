import { describe, it, expect } from 'bun:test';
import { generateHexID } from '@/utils/index';

describe('generateHexID', () => {
  it('should generate a string of length 6', () => {
     const id = generateHexID();
     console.log('this is the generated code: ', id);
     expect(id.length).toBe(6);
  });
 
  it('should only contain characters from the specified set', () => {
     const id = generateHexID();
     console.log('this is the generated code: ', id);
     
     const validCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
     for (const char of id) {
       expect(validCharacters.includes(char)).toBe(true);
     }
  });
 });