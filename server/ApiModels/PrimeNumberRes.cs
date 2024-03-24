using System.ComponentModel.DataAnnotations;

namespace server.ApiModels;

public record PrimeNumberRes
{
    [Required]
    public required List<int> PrimeNumbers { get; init; }
    [Required]
    public long ComputationTime { get; init; }
}