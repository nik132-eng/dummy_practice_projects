// Implement HTTP client adapter for Dynamics here
export class DynamicsHttpClient {
    async post(url: string, data: any): Promise<any> {
      console.log("Making HTTP POST to", url, "with data:", data);
        return {
          id:"123",
          data
        }
      // Your code to make HTTP requests to Dynamics
    }
  }