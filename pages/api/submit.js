export default function handler(req, res) {
  if (typeof req.body === 'object') {
    res.status(201).json(req.body)
  } else {
    res.status(400).json(`Body could not be parsed into json. Got: ${typeof req.body}`);
  }
}
