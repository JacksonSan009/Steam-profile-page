using System.Net;
using Microsoft.AspNetCore.Mvc;
using Moq;
// using Xunit.Abstractions;

namespace Steam_Profile_Page.Tests;

public class PlayerControllerTests
{

    const string mockSteamId = "76561198072992164";
    const string expectedJson = @"{
    ""response"": {
            ""players"": [
                {
            ""steamid"": ""76561198072992164"",
                ""communityvisibilitystate"": 3,
                ""profilestate"": 1,
                ""personaname"": ""JacksonSan009"",
                ""commentpermission"": 1,
                ""profileurl"": ""https://steamcommunity.com/profiles/76561198072992164/"",
                ""avatar"": ""https://avatars.steamstatic.com/83a40ec73950db3fbb3fcf2ac5faab54d3fa14e1.jpg"",
                ""avatarmedium"": ""https://avatars.steamstatic.com/83a40ec73950db3fbb3fcf2ac5faab54d3fa14e1_medium.jpg"",
                ""avatarfull"": ""https://avatars.steamstatic.com/83a40ec73950db3fbb3fcf2ac5faab54d3fa14e1_full.jpg"",
                ""avatarhash"": ""83a40ec73950db3fbb3fcf2ac5faab54d3fa14e1"",
                ""lastlogoff"": 1709860031,
                ""personastate"": 1,
                ""realname"": ""Jackson Arango"",
                ""primaryclanid"": ""103582791461696569"",
                ""timecreated"": 1349475589,
                ""personastateflags"": 0,
                ""loccountrycode"": ""CO"",
                ""locstatecode"": ""02"",
                ""loccityid"": 11085
                }
        ]
    }
}";

    [Fact]
    public async Task GetPlayerData_ReturnsSuccess_WithValidPlayerId()
    {
        // Arrange
        var mockLogger = new Mock<ILogger<PlayerController>>();
        var mockHttpClient = new Mock<HttpClient>();

        mockHttpClient.Setup(client => client.GetAsync(It.IsAny<string>()))
            .Returns(Task.FromResult(new HttpResponseMessage
            {
                StatusCode = HttpStatusCode.OK,
                Content = new StringContent(expectedJson)
            }));

        var controller = new PlayerController(mockLogger.Object, mockHttpClient.Object);

        // Act
        var result = await controller.GetPlayerData(mockSteamId);

        // Assert
        var okObjectResult = Assert.IsType<OkObjectResult>(result);
        Assert.Equal(expectedJson, okObjectResult.Value);
    }

    // [Fact]
    public async Task GetPlayerData_ReturnsOk_ForValidSteamId()
    {
        var mockHttpClient = new Mock<HttpClient>();
        // mockHttpClient.Setup(client => client.GetAsync(It.IsAny<string>()))
        //                      .Returns(Task.FromResult(new HttpResponseMessage
        //                      {
        //                          StatusCode = HttpStatusCode.OK,
        //                          Content = new StringContent(expectedJson)
        //                      }));

        var controller = new Steam_Profile_Page.Controllers.PlayerController();

        // Act
        var result = await controller.GetPlayerData(mockSteamId);

        output.WriteLine("This is output from {0}", result);

        // Assert
        Assert.IsType<OkObjectResult>(result);

        var okResult = result as OkObjectResult;
        Assert.Equal(expectedJson, okResult.Value);
    }

    // [Fact]

    // تعطيل(Tafkik - meaning disabled in Arabic, assuming you want a test with an error)
    public async Task GetPlayerData_ReturnsBadRequest_ForHttpRequestException()
    {
        // Arrange

        var mockException = new HttpRequestException("Simulated error");

        var mockHttpClient = new Mock<HttpClient>();
        mockHttpClient.Setup(client => client.GetAsync(It.IsAny<string>()))
                     .Throws(mockException);

        var controller = new Steam_Profile_Page.Controllers.PlayerController();

        // Act
        var result = await controller.GetPlayerData(mockSteamId);

        // Assert
        Assert.IsType<BadRequestObjectResult>(result);

        var badRequestResult = result as BadRequestObjectResult;
        Assert.StartsWith($"Error getting user {mockSteamId}:", badRequestResult.Value.ToString());
    }
}
