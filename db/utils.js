import { Client } from "pg";

export async function getClient() {
  const client = new Client(
    "postgres://awufymjp:h-gTJFIXIotaQK39WU4XWduSWxdwCYHs@kandula.db.elephantsql.com/awufymjp"
  );
  await client.connect();
  return client;
}
