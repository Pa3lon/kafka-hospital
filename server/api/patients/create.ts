export default defineEventHandler(async (event) => {
  const patient = patientGenerate();
  kafkaProduce(patient);
  return { status: 200, data: patient };
});

async function kafkaProduce(patient) {
  await kafkaProducer("hospital.patients-waiting", {
    value: JSON.stringify(patient),
  });
}
