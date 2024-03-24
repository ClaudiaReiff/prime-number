using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using server.ApiModels;

namespace server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PrimeNumberController : ControllerBase
{
    /**
     * Get all prime numbers up to a limit
     */
    [HttpGet("get-all/{limit}")]
    public Task<ActionResult<PrimeNumberRes>> GetAll([FromRoute] int limit)
    {
        var stopwatch = Stopwatch.StartNew();
        
        var numberList = new List<int>();
        
        for (var i = 2; i <= limit; i++)
        {
            if (IsPrimeNumber(i))
            {
                numberList.Add(i);
            }
        }
        
        stopwatch.Stop(); 
        
        var computationTime = stopwatch.ElapsedMilliseconds; 
        
        var response = new PrimeNumberRes()
        {
            PrimeNumbers = numberList,
            ComputationTime = computationTime
        };

        return Task.FromResult<ActionResult<PrimeNumberRes>>(response);
    }
    
    private static bool IsPrimeNumber(int num)
    {
        if (num <= 1)
        {
            return false;
        }
        
        for (int i = 2; i <= Math.Sqrt(num); i++)
        {
            if (num % i == 0)
            {
                return false;
            }
        }
        
        return true;
    }
}