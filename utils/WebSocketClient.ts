export default async function (topic: string) {
  if (process.server) return;
  const { data, send } = useWebSocket(`ws://${location.host}/api/websocket`);
  send(topic);
  return data;
}
