import generatePatient from "@/utils/patients/generatePatient";
import producer from "@/utils/kafka/producer";

export default defineEventHandler(async (event) => {
  const patient = generatePatient();
  kafkaProduce(patient);
  return { status: 200, data: patient };
});

async function kafkaProduce(patient) {
  await producer("hospital.patients-waiting", {
    value: JSON.stringify(patient),
  });
}
