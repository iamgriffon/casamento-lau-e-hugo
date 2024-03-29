import { generateHexID } from "@/utils";
import { db } from "./db";

export async function Seeder() {
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
  return FETCH_INSERTION;
}

await Seeder();