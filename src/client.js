import client from "@sanity/client"

export default client({
  projectId: "eoxm2hq9",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-11-26"
})