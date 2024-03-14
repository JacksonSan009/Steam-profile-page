using Microsoft.AspNetCore.Mvc;

namespace Steam_Profile_Page.Controllers;


[ApiController]
[Route("api/[controller]")]
public class PlayerController : ControllerBase
{
	private readonly string STEAM_API_KEY = Environment.GetEnvironmentVariable("STEAM_API_KEY") ?? "";

	private readonly string API_URI = "https://api.steampowered.com";

	[HttpGet]
	[Route("getPlayerData")]
	public async Task<IActionResult> GetPlayerData(string id)
	{
		return await getPlayerSummaries(id);
	}

	public async Task<IActionResult> getPlayerSummaries(string id)
	{
		using (HttpClient http = new HttpClient())
		{
			try
			{
				http.BaseAddress = new Uri(API_URI);
				var response = await http.GetAsync($"/ISteamUser/GetPlayerSummaries/v0002/?key={STEAM_API_KEY}&steamids={id}");
				response.EnsureSuccessStatusCode();

				string result = await response.Content.ReadAsStringAsync();

				return Ok(result);
			}
			catch (HttpRequestException ex)
			{
				return BadRequest($"Error getting user {id}: {ex.Message}");
			}
		}
	}
}
