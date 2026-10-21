# SicrediAuthApi

All URIs are relative to *https://api-parceiro.sicredi.com.br*

Method | HTTP request | Description
------------- | ------------- | -------------
[**autenticacao**](SicrediAuthApi.md#autenticacao) | **POST** /auth/openapi/token | Autenticação


<a name="autenticacao"></a>
# **autenticacao**
> AutenticacaoResponseEntity autenticacao(grantType, contentType, xApiKey, context, username, password, refreshToken, scope)

Autenticação

Gera um token JWT para autenticação nas demais operações. O access_token expira em 300s. Use o refresh_token para renovar.

### Example
```java
// Import classes:
import br.com.fidias.sicredi_cobranca.ApiClient;
import br.com.fidias.sicredi_cobranca.ApiException;
import br.com.fidias.sicredi_cobranca.Configuration;
import br.com.fidias.sicredi_cobranca.models.*;
import br.com.fidias.sicredi_cobranca.api.SicrediAuthApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-parceiro.sicredi.com.br");

    SicrediAuthApi apiInstance = new SicrediAuthApi(defaultClient);
    String grantType = "grantType_example"; // String | 
    String contentType = application/x-www-form-urlencoded; // String | 
    String xApiKey = xxxxxxxx-xxxx-xxxe-xxxx-xxxxxxxxxx; // String | 
    String context = COBRANCA; // String | 
    String username = "username_example"; // String | 
    String password = "password_example"; // String | 
    String refreshToken = "refreshToken_example"; // String | 
    String scope = "scope_example"; // String | 
    try {
      AutenticacaoResponseEntity result = apiInstance.autenticacao(grantType, contentType, xApiKey, context, username, password, refreshToken, scope);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SicrediAuthApi#autenticacao");
      System.err.println("Status code: " + e.getCode());
      System.err.println("Reason: " + e.getResponseBody());
      System.err.println("Response headers: " + e.getResponseHeaders());
      e.printStackTrace();
    }
  }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | **String**|  | [enum: password, refresh_token]
 **contentType** | **String**|  | [optional]
 **xApiKey** | **String**|  | [optional]
 **context** | **String**|  | [optional]
 **username** | **String**|  | [optional]
 **password** | **String**|  | [optional]
 **refreshToken** | **String**|  | [optional]
 **scope** | **String**|  | [optional] [enum: cobranca]

### Return type

[**AutenticacaoResponseEntity**](AutenticacaoResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** | Parâmetros inválidos |  -  |
**401** | Token ausente, inválido ou expirado |  -  |

