export async function Log(stack, level, packageName, message) {
  const logData = {
    stack,
    level,
    package: packageName,
    message
  };

  try {
    const response = await fetch('http://20.244.56.144/evaluation-service/logs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer YOUR_ACCESS_TOKEN_HERE'
      },
      body: JSON.stringify(logData)
    });

    const result = await response.json();
    console.log("Log sent:", result);
  } catch (error) {
    console.error("Logging failed:", error);
  }
}
