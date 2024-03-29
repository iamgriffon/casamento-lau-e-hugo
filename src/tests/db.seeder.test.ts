import { db } from "@/server/db";
import { generateHexID } from "@/utils";
import { describe, expect, it } from "bun:test";

describe('Testing DB', () => {
  it('should return only one entry', async () => {
    const DELETE_ALL = await db.padrinhos.deleteMany();

    const CREATE_TEST = await db.padrinhos.create({
      data: {
        code: generateHexID(),
        color: 'Beige',
        couple_id: 1,
        email: 'guusilveira@gmail.com',
        name: 'Gustavo Dupin',
      }
    });
  
    const FETCH_INSERTION = await db.padrinhos.findMany().then(res => {
      return res;
    });
  
    await Promise.all([DELETE_ALL, CREATE_TEST, FETCH_INSERTION]);
    expect(FETCH_INSERTION).toHaveLength(1)

    await Promise.resolve(DELETE_ALL);
  });
})