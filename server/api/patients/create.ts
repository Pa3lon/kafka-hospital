export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const topic = body.topic;
  let patient = body.patient;
  if (!patient) patient = patientGenerate();
  kafkaProduce(topic, patient);
  return { status: 200, data: patient };
});

async function kafkaProduce(topic, patient) {
  await kafkaProducer(topic, {
    value: JSON.stringify(patient),
  });
}
