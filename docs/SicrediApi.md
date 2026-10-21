# SicrediApi

All URIs are relative to *https://api-parceiro.sicredi.com.br*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cadastrarBoleto**](SicrediApi.md#cadastrarBoleto) | **POST** /cobranca/boleto/v1/boletos | Cadastrar Boleto
[**cobrancaBoletoV1Boletos241000727DataVencimentoPatch**](SicrediApi.md#cobrancaBoletoV1Boletos241000727DataVencimentoPatch) | **PATCH** /cobranca/boleto/v1/boletos/241000727/data-vencimento | Instrucao - Altera Vencimento
[**cobrancaBoletoV1Boletos600007945DescontoPatch**](SicrediApi.md#cobrancaBoletoV1Boletos600007945DescontoPatch) | **PATCH** /cobranca/boleto/v1/boletos/600007945/desconto | Instrução Altera Juros
[**cobrancaBoletoV1Boletos600007945SeuNumeroPatch**](SicrediApi.md#cobrancaBoletoV1Boletos600007945SeuNumeroPatch) | **PATCH** /cobranca/boleto/v1/boletos/600007945/seu-numero | Instrução Altera Seu Numero
[**cobrancaBoletoV1Boletos600007970DataVencimentoPatch**](SicrediApi.md#cobrancaBoletoV1Boletos600007970DataVencimentoPatch) | **PATCH** /cobranca/boleto/v1/boletos/600007970/data-vencimento | Instrucao - Altera Data Desconto
[**cobrancaBoletoV1Boletos600008054DescontoPatch**](SicrediApi.md#cobrancaBoletoV1Boletos600008054DescontoPatch) | **PATCH** /cobranca/boleto/v1/boletos/600008054/desconto | Instrução Desconto
[**cobrancaBoletoV1Boletos600009115SustarNegativacaoBaixarTituloPatch**](SicrediApi.md#cobrancaBoletoV1Boletos600009115SustarNegativacaoBaixarTituloPatch) | **PATCH** /cobranca/boleto/v1/boletos/600009115/sustar-negativacao-baixar-titulo | Instrucao Sustar Negativacao Baixar
[**cobrancaBoletoV1Boletos600009115SustarNegativacaoManterTituloPatch**](SicrediApi.md#cobrancaBoletoV1Boletos600009115SustarNegativacaoManterTituloPatch) | **PATCH** /cobranca/boleto/v1/boletos/600009115/sustar-negativacao-manter-titulo | Instrucao Sustar Negativacao Manter
[**cobrancaBoletoV1Boletos600009199CancelarAbatimentoPatch**](SicrediApi.md#cobrancaBoletoV1Boletos600009199CancelarAbatimentoPatch) | **PATCH** /cobranca/boleto/v1/boletos/600009199/cancelar-abatimento | Instrucao Cancelar Abatimento
[**cobrancaBoletoV1Boletos600009999CancelarProtestoAutomaticoPatch**](SicrediApi.md#cobrancaBoletoV1Boletos600009999CancelarProtestoAutomaticoPatch) | **PATCH** /cobranca/boleto/v1/boletos/600009999/cancelar-protesto-automatico | Instrucao Cancelar Protesto Automatico
[**cobrancaBoletoV1Boletos600009999ConcederAbatimentoPatch**](SicrediApi.md#cobrancaBoletoV1Boletos600009999ConcederAbatimentoPatch) | **PATCH** /cobranca/boleto/v1/boletos/600009999/conceder-abatimento | Instrução Conceder Abatimento
[**cobrancaBoletoV1Boletos600009999NegativacaoPatch**](SicrediApi.md#cobrancaBoletoV1Boletos600009999NegativacaoPatch) | **PATCH** /cobranca/boleto/v1/boletos/600009999/negativacao | Instrucao Negativacao
[**cobrancaBoletoV1Boletos600009999ProtestoPatch**](SicrediApi.md#cobrancaBoletoV1Boletos600009999ProtestoPatch) | **PATCH** /cobranca/boleto/v1/boletos/600009999/protesto | Instrucao Protesto
[**cobrancaBoletoV1Boletos600009999SustarProtestoManterTituloPatch**](SicrediApi.md#cobrancaBoletoV1Boletos600009999SustarProtestoManterTituloPatch) | **PATCH** /cobranca/boleto/v1/boletos/600009999/sustar-protesto-manter-titulo | Instrucao Sustar Protesto Manter
[**cobrancaBoletoV1Boletos60000999SustarProtestoBaixarTituloPatch**](SicrediApi.md#cobrancaBoletoV1Boletos60000999SustarProtestoBaixarTituloPatch) | **PATCH** /cobranca/boleto/v1/boletos/60000999/sustar-protesto-baixar-titulo | Instrucao Sustar Protesto Baixar
[**cobrancaBoletoV1BoletosCadastradosGet**](SicrediApi.md#cobrancaBoletoV1BoletosCadastradosGet) | **GET** /cobranca/boleto/v1/boletos/cadastrados | Consulta idEmpresa/SeuNum
[**cobrancaBoletoV1BoletosLiquidadosDiaGet**](SicrediApi.md#cobrancaBoletoV1BoletosLiquidadosDiaGet) | **GET** /cobranca/boleto/v1/boletos/liquidados/dia | Consultar Boletos Liquidados por Dia
[**cobrancaBoletoV1BoletosNossoNumeroBaixaPatch**](SicrediApi.md#cobrancaBoletoV1BoletosNossoNumeroBaixaPatch) | **PATCH** /cobranca/boleto/v1/boletos/{nossoNumero}/baixa | Instrução Baixa
[**cobrancaV1CobrancaFinanceiroMovimentacoesGet**](SicrediApi.md#cobrancaV1CobrancaFinanceiroMovimentacoesGet) | **GET** /cobranca/v1/cobranca-financeiro/movimentacoes | Francesinha - PRD
[**consultarBoleto**](SicrediApi.md#consultarBoleto) | **GET** /cobranca/boleto/v1/boletos | Consultar Boleto por Nosso Número (v1)
[**consultarBoletoDataMovimento**](SicrediApi.md#consultarBoletoDataMovimento) | **GET** /cobranca/boleto/v2/boletos | Consultar Boleto por Nosso Número (v2 - com data-movimento)
[**imprimirBoleto**](SicrediApi.md#imprimirBoleto) | **GET** /cobranca/boleto/v1/boletos/pdf | Imprimir Boleto (PDF)


<a name="cadastrarBoleto"></a>
# **cadastrarBoleto**
> CadastrarBoletoResponseEntity cadastrarBoleto(authorization, contentType, cooperativa, posto, xApiKey, cadastrarBoletoFormEntity)

Cadastrar Boleto

Cadastra um boleto (Tradicional, Híbrido ou com Split de crédito).

### Example
```java
// Import classes:
import br.com.fidias.sicredi_cobranca.ApiClient;
import br.com.fidias.sicredi_cobranca.ApiException;
import br.com.fidias.sicredi_cobranca.Configuration;
import br.com.fidias.sicredi_cobranca.models.*;
import br.com.fidias.sicredi_cobranca.api.SicrediApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-parceiro.sicredi.com.br");

    SicrediApi apiInstance = new SicrediApi(defaultClient);
    String authorization = "authorization_example"; // String | 
    String contentType = application/json; // String | 
    String cooperativa = 6789; // String | 
    String posto = 03; // String | 
    String xApiKey = xxxxxxxx-xxxx-xxxe-xxxx-xxxxxxxxxx; // String | 
    CadastrarBoletoFormEntity cadastrarBoletoFormEntity = new CadastrarBoletoFormEntity(); // CadastrarBoletoFormEntity | 
    try {
      CadastrarBoletoResponseEntity result = apiInstance.cadastrarBoleto(authorization, contentType, cooperativa, posto, xApiKey, cadastrarBoletoFormEntity);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SicrediApi#cadastrarBoleto");
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
 **authorization** | **String**|  | [optional]
 **contentType** | **String**|  | [optional]
 **cooperativa** | **String**|  | [optional]
 **posto** | **String**|  | [optional]
 **xApiKey** | **String**|  | [optional]
 **cadastrarBoletoFormEntity** | [**CadastrarBoletoFormEntity**](CadastrarBoletoFormEntity.md)|  | [optional]

### Return type

[**CadastrarBoletoResponseEntity**](CadastrarBoletoResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful response |  -  |

<a name="cobrancaBoletoV1Boletos241000727DataVencimentoPatch"></a>
# **cobrancaBoletoV1Boletos241000727DataVencimentoPatch**
> cobrancaBoletoV1Boletos241000727DataVencimentoPatch(authorization, contentType, codigoBeneficiario, cooperativa, posto, xApiKey, body)

Instrucao - Altera Vencimento

### Example
```java
// Import classes:
import br.com.fidias.sicredi_cobranca.ApiClient;
import br.com.fidias.sicredi_cobranca.ApiException;
import br.com.fidias.sicredi_cobranca.Configuration;
import br.com.fidias.sicredi_cobranca.models.*;
import br.com.fidias.sicredi_cobranca.api.SicrediApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-parceiro.sicredi.com.br");

    SicrediApi apiInstance = new SicrediApi(defaultClient);
    String authorization = Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJxMlRFLXliYWxnNjIxSmRCMU9IX0w2Sms5QllxODJtNkFSZ0NGaDZtQnZBIn0.eyJleHAiOjE3MTYxMjEzNjEsImlhdCI6MTcxNjEyMTA2MSwianRpIjoiMjg3NTVjMTQtNzVlNi00NjhhLWE2YTktZTZmZDlmNDdkM2Y2IiwiaXNzIjoiaHR0cHM6Ly9hdXRoLW9wZW5hcGkucHJkLnNpY3JlZGkuY2xvdWQvcmVhbG1zL29wZW5hcGkiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiZjozMWY3ODE1MS1jMzdmLTQzOWYtYTIwOS02NjFjYTQ3MzkzYTE6Q09CUkFOQ0E6MDA0MTQwMTE2IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoib3BlbmFwaS1ndy1zZW5zZWRpYSIsInNlc3Npb25fc3RhdGUiOiIzYjBhZDhhZS1lNmIyLTRjNWQtYjQxMi01YzEzZWVlMDVjMzciLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtb3BlbmFwaSIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImNvYnJhbmNhIHByb2ZpbGUgZW1haWwiLCJzaWQiOiIzYjBhZDhhZS1lNmIyLTRjNWQtYjQxMi01YzEzZWVlMDVjMzciLCJvcGVuYXBpX3VzZXJuYW1lIjoiMDA0MTQwMTE2Iiwib3BlbmFwaV9jb250ZXh0IjoiQ09CUkFOQ0EiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6IjAwNDE0MDExNiJ9.XFFW96ob9Z59ujIkVqEopGq-pMKenSH4FL82QswiL6qWr9RhMm062q9WpjvzfEnNrkWCcZaak2P6VMQPLKRcYTUoTMxFWdVMtb0_9FsbObqR0ucCTqm7oDqT9RlEpn0MsxNQq2QIKuXqO8REEe7dTQM64Fs86bb8ClOoEEHJOpg-_zv9r6f8Cmxi8Nzfx7Sm3nF4FL9zuoj1RRIjdp9VyoDNk93Xe85Xdb2-msjQTtJVEsnZ14YF7Mxqr_YDY2JN0mkmE8_QrGbGZOk0OXJuZw1ZJM11GKB5dcshFYxGNks55atx-ChMmk-Y5JhANJHURQTj6hl8HWODMr6TyH1Wzg; // String | 
    String contentType = application/json; // String | 
    String codigoBeneficiario = 12345; // String | 
    String cooperativa = 1234; // String | 
    String posto = 12; // String | 
    String xApiKey = "xApiKey_example"; // String | 
    Object body = null; // Object | 
    try {
      apiInstance.cobrancaBoletoV1Boletos241000727DataVencimentoPatch(authorization, contentType, codigoBeneficiario, cooperativa, posto, xApiKey, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling SicrediApi#cobrancaBoletoV1Boletos241000727DataVencimentoPatch");
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
 **authorization** | **String**|  | [optional]
 **contentType** | **String**|  | [optional]
 **codigoBeneficiario** | **String**|  | [optional]
 **cooperativa** | **String**|  | [optional]
 **posto** | **String**|  | [optional]
 **xApiKey** | **String**|  | [optional]
 **body** | **Object**|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

<a name="cobrancaBoletoV1Boletos600007945DescontoPatch"></a>
# **cobrancaBoletoV1Boletos600007945DescontoPatch**
> cobrancaBoletoV1Boletos600007945DescontoPatch(authorization, contentType, codigoBeneficiario, cooperativa, posto, xApiKey, body)

Instrução Altera Juros

### Example
```java
// Import classes:
import br.com.fidias.sicredi_cobranca.ApiClient;
import br.com.fidias.sicredi_cobranca.ApiException;
import br.com.fidias.sicredi_cobranca.Configuration;
import br.com.fidias.sicredi_cobranca.models.*;
import br.com.fidias.sicredi_cobranca.api.SicrediApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-parceiro.sicredi.com.br");

    SicrediApi apiInstance = new SicrediApi(defaultClient);
    String authorization = Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJxMlRFLXliYWxnNjIxSmRCt0-sKVI1SAvg; // String | 
    String contentType = application/json; // String | 
    String codigoBeneficiario = 12345; // String | 
    String cooperativa = 1234; // String | 
    String posto = 12; // String | 
    String xApiKey = "xApiKey_example"; // String | 
    Object body = null; // Object | 
    try {
      apiInstance.cobrancaBoletoV1Boletos600007945DescontoPatch(authorization, contentType, codigoBeneficiario, cooperativa, posto, xApiKey, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling SicrediApi#cobrancaBoletoV1Boletos600007945DescontoPatch");
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
 **authorization** | **String**|  | [optional]
 **contentType** | **String**|  | [optional]
 **codigoBeneficiario** | **String**|  | [optional]
 **cooperativa** | **String**|  | [optional]
 **posto** | **String**|  | [optional]
 **xApiKey** | **String**|  | [optional]
 **body** | **Object**|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

<a name="cobrancaBoletoV1Boletos600007945SeuNumeroPatch"></a>
# **cobrancaBoletoV1Boletos600007945SeuNumeroPatch**
> cobrancaBoletoV1Boletos600007945SeuNumeroPatch(authorization, contentType, codigoBeneficiario, cooperativa, posto, xApiKey, body)

Instrução Altera Seu Numero

### Example
```java
// Import classes:
import br.com.fidias.sicredi_cobranca.ApiClient;
import br.com.fidias.sicredi_cobranca.ApiException;
import br.com.fidias.sicredi_cobranca.Configuration;
import br.com.fidias.sicredi_cobranca.models.*;
import br.com.fidias.sicredi_cobranca.api.SicrediApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-parceiro.sicredi.com.br");

    SicrediApi apiInstance = new SicrediApi(defaultClient);
    String authorization = Bearer eyJhbGci; // String | 
    String contentType = application/json; // String | 
    String codigoBeneficiario = 12345; // String | 
    String cooperativa = 1234; // String | 
    String posto = 12; // String | 
    String xApiKey = "xApiKey_example"; // String | 
    Object body = null; // Object | 
    try {
      apiInstance.cobrancaBoletoV1Boletos600007945SeuNumeroPatch(authorization, contentType, codigoBeneficiario, cooperativa, posto, xApiKey, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling SicrediApi#cobrancaBoletoV1Boletos600007945SeuNumeroPatch");
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
 **authorization** | **String**|  | [optional]
 **contentType** | **String**|  | [optional]
 **codigoBeneficiario** | **String**|  | [optional]
 **cooperativa** | **String**|  | [optional]
 **posto** | **String**|  | [optional]
 **xApiKey** | **String**|  | [optional]
 **body** | **Object**|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

<a name="cobrancaBoletoV1Boletos600007970DataVencimentoPatch"></a>
# **cobrancaBoletoV1Boletos600007970DataVencimentoPatch**
> cobrancaBoletoV1Boletos600007970DataVencimentoPatch(authorization, contentType, codigoBeneficiario, cooperativa, posto, xApiKey, body)

Instrucao - Altera Data Desconto

### Example
```java
// Import classes:
import br.com.fidias.sicredi_cobranca.ApiClient;
import br.com.fidias.sicredi_cobranca.ApiException;
import br.com.fidias.sicredi_cobranca.Configuration;
import br.com.fidias.sicredi_cobranca.models.*;
import br.com.fidias.sicredi_cobranca.api.SicrediApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-parceiro.sicredi.com.br");

    SicrediApi apiInstance = new SicrediApi(defaultClient);
    String authorization = Bearer eyJhbGciy06CQ; // String | 
    String contentType = application/json; // String | 
    String codigoBeneficiario = 12345; // String | 
    String cooperativa = 1234; // String | 
    String posto = 12; // String | 
    String xApiKey = "xApiKey_example"; // String | 
    Object body = null; // Object | 
    try {
      apiInstance.cobrancaBoletoV1Boletos600007970DataVencimentoPatch(authorization, contentType, codigoBeneficiario, cooperativa, posto, xApiKey, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling SicrediApi#cobrancaBoletoV1Boletos600007970DataVencimentoPatch");
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
 **authorization** | **String**|  | [optional]
 **contentType** | **String**|  | [optional]
 **codigoBeneficiario** | **String**|  | [optional]
 **cooperativa** | **String**|  | [optional]
 **posto** | **String**|  | [optional]
 **xApiKey** | **String**|  | [optional]
 **body** | **Object**|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

<a name="cobrancaBoletoV1Boletos600008054DescontoPatch"></a>
# **cobrancaBoletoV1Boletos600008054DescontoPatch**
> cobrancaBoletoV1Boletos600008054DescontoPatch(authorization, contentType, codigoBeneficiario, cooperativa, posto, xApiKey, body)

Instrução Desconto

### Example
```java
// Import classes:
import br.com.fidias.sicredi_cobranca.ApiClient;
import br.com.fidias.sicredi_cobranca.ApiException;
import br.com.fidias.sicredi_cobranca.Configuration;
import br.com.fidias.sicredi_cobranca.models.*;
import br.com.fidias.sicredi_cobranca.api.SicrediApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-parceiro.sicredi.com.br");

    SicrediApi apiInstance = new SicrediApi(defaultClient);
    String authorization = Bearer 4OvvpKKNEbET92S64wEA; // String | 
    String contentType = application/json; // String | 
    String codigoBeneficiario = 12345; // String | 
    String cooperativa = 1134; // String | 
    String posto = 12; // String | 
    String xApiKey = "xApiKey_example"; // String | 
    Object body = null; // Object | 
    try {
      apiInstance.cobrancaBoletoV1Boletos600008054DescontoPatch(authorization, contentType, codigoBeneficiario, cooperativa, posto, xApiKey, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling SicrediApi#cobrancaBoletoV1Boletos600008054DescontoPatch");
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
 **authorization** | **String**|  | [optional]
 **contentType** | **String**|  | [optional]
 **codigoBeneficiario** | **String**|  | [optional]
 **cooperativa** | **String**|  | [optional]
 **posto** | **String**|  | [optional]
 **xApiKey** | **String**|  | [optional]
 **body** | **Object**|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

<a name="cobrancaBoletoV1Boletos600009115SustarNegativacaoBaixarTituloPatch"></a>
# **cobrancaBoletoV1Boletos600009115SustarNegativacaoBaixarTituloPatch**
> cobrancaBoletoV1Boletos600009115SustarNegativacaoBaixarTituloPatch(codigoBeneficiario, cooperativa, posto, authorization, contentType, xApiKey, body)

Instrucao Sustar Negativacao Baixar

### Example
```java
// Import classes:
import br.com.fidias.sicredi_cobranca.ApiClient;
import br.com.fidias.sicredi_cobranca.ApiException;
import br.com.fidias.sicredi_cobranca.Configuration;
import br.com.fidias.sicredi_cobranca.models.*;
import br.com.fidias.sicredi_cobranca.api.SicrediApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-parceiro.sicredi.com.br");

    SicrediApi apiInstance = new SicrediApi(defaultClient);
    String codigoBeneficiario = 12345; // String | 
    String cooperativa = 1234; // String | 
    String posto = 12; // String | 
    String authorization = Bearer eyJ; // String | 
    String contentType = application/json; // String | 
    String xApiKey = "xApiKey_example"; // String | 
    Object body = null; // Object | 
    try {
      apiInstance.cobrancaBoletoV1Boletos600009115SustarNegativacaoBaixarTituloPatch(codigoBeneficiario, cooperativa, posto, authorization, contentType, xApiKey, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling SicrediApi#cobrancaBoletoV1Boletos600009115SustarNegativacaoBaixarTituloPatch");
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
 **codigoBeneficiario** | **String**|  | [optional]
 **cooperativa** | **String**|  | [optional]
 **posto** | **String**|  | [optional]
 **authorization** | **String**|  | [optional]
 **contentType** | **String**|  | [optional]
 **xApiKey** | **String**|  | [optional]
 **body** | **Object**|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

<a name="cobrancaBoletoV1Boletos600009115SustarNegativacaoManterTituloPatch"></a>
# **cobrancaBoletoV1Boletos600009115SustarNegativacaoManterTituloPatch**
> cobrancaBoletoV1Boletos600009115SustarNegativacaoManterTituloPatch(codigoBeneficiario, cooperativa, posto, authorization, contentType, xApiKey, body)

Instrucao Sustar Negativacao Manter

### Example
```java
// Import classes:
import br.com.fidias.sicredi_cobranca.ApiClient;
import br.com.fidias.sicredi_cobranca.ApiException;
import br.com.fidias.sicredi_cobranca.Configuration;
import br.com.fidias.sicredi_cobranca.models.*;
import br.com.fidias.sicredi_cobranca.api.SicrediApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-parceiro.sicredi.com.br");

    SicrediApi apiInstance = new SicrediApi(defaultClient);
    String codigoBeneficiario = 12345; // String | 
    String cooperativa = 1234; // String | 
    String posto = 12; // String | 
    String authorization = Bearer eyJhbQ; // String | 
    String contentType = application/json; // String | 
    String xApiKey = "xApiKey_example"; // String | 
    Object body = null; // Object | 
    try {
      apiInstance.cobrancaBoletoV1Boletos600009115SustarNegativacaoManterTituloPatch(codigoBeneficiario, cooperativa, posto, authorization, contentType, xApiKey, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling SicrediApi#cobrancaBoletoV1Boletos600009115SustarNegativacaoManterTituloPatch");
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
 **codigoBeneficiario** | **String**|  | [optional]
 **cooperativa** | **String**|  | [optional]
 **posto** | **String**|  | [optional]
 **authorization** | **String**|  | [optional]
 **contentType** | **String**|  | [optional]
 **xApiKey** | **String**|  | [optional]
 **body** | **Object**|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

<a name="cobrancaBoletoV1Boletos600009199CancelarAbatimentoPatch"></a>
# **cobrancaBoletoV1Boletos600009199CancelarAbatimentoPatch**
> cobrancaBoletoV1Boletos600009199CancelarAbatimentoPatch(codigoBeneficiario, cooperativa, posto, authorization, contentType, xApiKey, body)

Instrucao Cancelar Abatimento

### Example
```java
// Import classes:
import br.com.fidias.sicredi_cobranca.ApiClient;
import br.com.fidias.sicredi_cobranca.ApiException;
import br.com.fidias.sicredi_cobranca.Configuration;
import br.com.fidias.sicredi_cobranca.models.*;
import br.com.fidias.sicredi_cobranca.api.SicrediApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-parceiro.sicredi.com.br");

    SicrediApi apiInstance = new SicrediApi(defaultClient);
    String codigoBeneficiario = 12345; // String | 
    String cooperativa = 1234; // String | 
    String posto = 12; // String | 
    String authorization = Bearer ey7ibQyXsO_trQ; // String | 
    String contentType = application/json; // String | 
    String xApiKey = "xApiKey_example"; // String | 
    Object body = null; // Object | 
    try {
      apiInstance.cobrancaBoletoV1Boletos600009199CancelarAbatimentoPatch(codigoBeneficiario, cooperativa, posto, authorization, contentType, xApiKey, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling SicrediApi#cobrancaBoletoV1Boletos600009199CancelarAbatimentoPatch");
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
 **codigoBeneficiario** | **String**|  | [optional]
 **cooperativa** | **String**|  | [optional]
 **posto** | **String**|  | [optional]
 **authorization** | **String**|  | [optional]
 **contentType** | **String**|  | [optional]
 **xApiKey** | **String**|  | [optional]
 **body** | **Object**|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

<a name="cobrancaBoletoV1Boletos600009999CancelarProtestoAutomaticoPatch"></a>
# **cobrancaBoletoV1Boletos600009999CancelarProtestoAutomaticoPatch**
> cobrancaBoletoV1Boletos600009999CancelarProtestoAutomaticoPatch(codigoBeneficiario, cooperativa, posto, authorization, contentType, xApiKey, body)

Instrucao Cancelar Protesto Automatico

### Example
```java
// Import classes:
import br.com.fidias.sicredi_cobranca.ApiClient;
import br.com.fidias.sicredi_cobranca.ApiException;
import br.com.fidias.sicredi_cobranca.Configuration;
import br.com.fidias.sicredi_cobranca.models.*;
import br.com.fidias.sicredi_cobranca.api.SicrediApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-parceiro.sicredi.com.br");

    SicrediApi apiInstance = new SicrediApi(defaultClient);
    String codigoBeneficiario = 12345; // String | 
    String cooperativa = 1234; // String | 
    String posto = 12; // String | 
    String authorization = Bearer eyJhbgEFnWM; // String | 
    String contentType = application/json; // String | 
    String xApiKey = "xApiKey_example"; // String | 
    Object body = null; // Object | 
    try {
      apiInstance.cobrancaBoletoV1Boletos600009999CancelarProtestoAutomaticoPatch(codigoBeneficiario, cooperativa, posto, authorization, contentType, xApiKey, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling SicrediApi#cobrancaBoletoV1Boletos600009999CancelarProtestoAutomaticoPatch");
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
 **codigoBeneficiario** | **String**|  | [optional]
 **cooperativa** | **String**|  | [optional]
 **posto** | **String**|  | [optional]
 **authorization** | **String**|  | [optional]
 **contentType** | **String**|  | [optional]
 **xApiKey** | **String**|  | [optional]
 **body** | **Object**|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

<a name="cobrancaBoletoV1Boletos600009999ConcederAbatimentoPatch"></a>
# **cobrancaBoletoV1Boletos600009999ConcederAbatimentoPatch**
> cobrancaBoletoV1Boletos600009999ConcederAbatimentoPatch(authorization, contentType, codigoBeneficiario, cooperativa, posto, xApiKey, body)

Instrução Conceder Abatimento

### Example
```java
// Import classes:
import br.com.fidias.sicredi_cobranca.ApiClient;
import br.com.fidias.sicredi_cobranca.ApiException;
import br.com.fidias.sicredi_cobranca.Configuration;
import br.com.fidias.sicredi_cobranca.models.*;
import br.com.fidias.sicredi_cobranca.api.SicrediApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-parceiro.sicredi.com.br");

    SicrediApi apiInstance = new SicrediApi(defaultClient);
    String authorization = Bearer eyJhbGcn-hVedKW6tCFNeAcQpTjnNE9bQyXsO_trQ; // String | 
    String contentType = application/json; // String | 
    String codigoBeneficiario = 12345; // String | 
    String cooperativa = 12345; // String | 
    String posto = 12; // String | 
    String xApiKey = "xApiKey_example"; // String | 
    Object body = null; // Object | 
    try {
      apiInstance.cobrancaBoletoV1Boletos600009999ConcederAbatimentoPatch(authorization, contentType, codigoBeneficiario, cooperativa, posto, xApiKey, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling SicrediApi#cobrancaBoletoV1Boletos600009999ConcederAbatimentoPatch");
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
 **authorization** | **String**|  | [optional]
 **contentType** | **String**|  | [optional]
 **codigoBeneficiario** | **String**|  | [optional]
 **cooperativa** | **String**|  | [optional]
 **posto** | **String**|  | [optional]
 **xApiKey** | **String**|  | [optional]
 **body** | **Object**|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

<a name="cobrancaBoletoV1Boletos600009999NegativacaoPatch"></a>
# **cobrancaBoletoV1Boletos600009999NegativacaoPatch**
> cobrancaBoletoV1Boletos600009999NegativacaoPatch(codigoBeneficiario, cooperativa, posto, authorization, contentType, xApiKey, body)

Instrucao Negativacao

### Example
```java
// Import classes:
import br.com.fidias.sicredi_cobranca.ApiClient;
import br.com.fidias.sicredi_cobranca.ApiException;
import br.com.fidias.sicredi_cobranca.Configuration;
import br.com.fidias.sicredi_cobranca.models.*;
import br.com.fidias.sicredi_cobranca.api.SicrediApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-parceiro.sicredi.com.br");

    SicrediApi apiInstance = new SicrediApi(defaultClient);
    String codigoBeneficiario = 12345; // String | 
    String cooperativa = 1234; // String | 
    String posto = 12; // String | 
    String authorization = Bearer eyJh; // String | 
    String contentType = application/json; // String | 
    String xApiKey = "xApiKey_example"; // String | 
    Object body = null; // Object | 
    try {
      apiInstance.cobrancaBoletoV1Boletos600009999NegativacaoPatch(codigoBeneficiario, cooperativa, posto, authorization, contentType, xApiKey, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling SicrediApi#cobrancaBoletoV1Boletos600009999NegativacaoPatch");
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
 **codigoBeneficiario** | **String**|  | [optional]
 **cooperativa** | **String**|  | [optional]
 **posto** | **String**|  | [optional]
 **authorization** | **String**|  | [optional]
 **contentType** | **String**|  | [optional]
 **xApiKey** | **String**|  | [optional]
 **body** | **Object**|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

<a name="cobrancaBoletoV1Boletos600009999ProtestoPatch"></a>
# **cobrancaBoletoV1Boletos600009999ProtestoPatch**
> cobrancaBoletoV1Boletos600009999ProtestoPatch(codigoBeneficiario, cooperativa, posto, authorization, contentType, xApiKey, body)

Instrucao Protesto

### Example
```java
// Import classes:
import br.com.fidias.sicredi_cobranca.ApiClient;
import br.com.fidias.sicredi_cobranca.ApiException;
import br.com.fidias.sicredi_cobranca.Configuration;
import br.com.fidias.sicredi_cobranca.models.*;
import br.com.fidias.sicredi_cobranca.api.SicrediApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-parceiro.sicredi.com.br");

    SicrediApi apiInstance = new SicrediApi(defaultClient);
    String codigoBeneficiario = 12345; // String | 
    String cooperativa = 1234; // String | 
    String posto = 12; // String | 
    String authorization = Bearer eyJhbGciOPw; // String | 
    String contentType = application/json; // String | 
    String xApiKey = "xApiKey_example"; // String | 
    Object body = null; // Object | 
    try {
      apiInstance.cobrancaBoletoV1Boletos600009999ProtestoPatch(codigoBeneficiario, cooperativa, posto, authorization, contentType, xApiKey, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling SicrediApi#cobrancaBoletoV1Boletos600009999ProtestoPatch");
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
 **codigoBeneficiario** | **String**|  | [optional]
 **cooperativa** | **String**|  | [optional]
 **posto** | **String**|  | [optional]
 **authorization** | **String**|  | [optional]
 **contentType** | **String**|  | [optional]
 **xApiKey** | **String**|  | [optional]
 **body** | **Object**|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

<a name="cobrancaBoletoV1Boletos600009999SustarProtestoManterTituloPatch"></a>
# **cobrancaBoletoV1Boletos600009999SustarProtestoManterTituloPatch**
> cobrancaBoletoV1Boletos600009999SustarProtestoManterTituloPatch(codigoBeneficiario, cooperativa, posto, authorization, contentType, xApiKey, body)

Instrucao Sustar Protesto Manter

### Example
```java
// Import classes:
import br.com.fidias.sicredi_cobranca.ApiClient;
import br.com.fidias.sicredi_cobranca.ApiException;
import br.com.fidias.sicredi_cobranca.Configuration;
import br.com.fidias.sicredi_cobranca.models.*;
import br.com.fidias.sicredi_cobranca.api.SicrediApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-parceiro.sicredi.com.br");

    SicrediApi apiInstance = new SicrediApi(defaultClient);
    String codigoBeneficiario = 12345; // String | 
    String cooperativa = 1234; // String | 
    String posto = 12; // String | 
    String authorization = Bearer eyJhbGc; // String | 
    String contentType = application/json; // String | 
    String xApiKey = "xApiKey_example"; // String | 
    Object body = null; // Object | 
    try {
      apiInstance.cobrancaBoletoV1Boletos600009999SustarProtestoManterTituloPatch(codigoBeneficiario, cooperativa, posto, authorization, contentType, xApiKey, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling SicrediApi#cobrancaBoletoV1Boletos600009999SustarProtestoManterTituloPatch");
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
 **codigoBeneficiario** | **String**|  | [optional]
 **cooperativa** | **String**|  | [optional]
 **posto** | **String**|  | [optional]
 **authorization** | **String**|  | [optional]
 **contentType** | **String**|  | [optional]
 **xApiKey** | **String**|  | [optional]
 **body** | **Object**|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

<a name="cobrancaBoletoV1Boletos60000999SustarProtestoBaixarTituloPatch"></a>
# **cobrancaBoletoV1Boletos60000999SustarProtestoBaixarTituloPatch**
> cobrancaBoletoV1Boletos60000999SustarProtestoBaixarTituloPatch(codigoBeneficiario, cooperativa, posto, authorization, contentType, xApiKey, body)

Instrucao Sustar Protesto Baixar

### Example
```java
// Import classes:
import br.com.fidias.sicredi_cobranca.ApiClient;
import br.com.fidias.sicredi_cobranca.ApiException;
import br.com.fidias.sicredi_cobranca.Configuration;
import br.com.fidias.sicredi_cobranca.models.*;
import br.com.fidias.sicredi_cobranca.api.SicrediApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-parceiro.sicredi.com.br");

    SicrediApi apiInstance = new SicrediApi(defaultClient);
    String codigoBeneficiario = 12345; // String | 
    String cooperativa = 1234; // String | 
    String posto = 12; // String | 
    String authorization = Bearer ey; // String | 
    String contentType = application/json; // String | 
    String xApiKey = "xApiKey_example"; // String | 
    Object body = null; // Object | 
    try {
      apiInstance.cobrancaBoletoV1Boletos60000999SustarProtestoBaixarTituloPatch(codigoBeneficiario, cooperativa, posto, authorization, contentType, xApiKey, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling SicrediApi#cobrancaBoletoV1Boletos60000999SustarProtestoBaixarTituloPatch");
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
 **codigoBeneficiario** | **String**|  | [optional]
 **cooperativa** | **String**|  | [optional]
 **posto** | **String**|  | [optional]
 **authorization** | **String**|  | [optional]
 **contentType** | **String**|  | [optional]
 **xApiKey** | **String**|  | [optional]
 **body** | **Object**|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

<a name="cobrancaBoletoV1BoletosCadastradosGet"></a>
# **cobrancaBoletoV1BoletosCadastradosGet**
> cobrancaBoletoV1BoletosCadastradosGet(cooperativa, posto, authorization, xApiKey, contentType, idTituloEmpresa, seuNumero, codigoBeneficiario)

Consulta idEmpresa/SeuNum

### Example
```java
// Import classes:
import br.com.fidias.sicredi_cobranca.ApiClient;
import br.com.fidias.sicredi_cobranca.ApiException;
import br.com.fidias.sicredi_cobranca.Configuration;
import br.com.fidias.sicredi_cobranca.models.*;
import br.com.fidias.sicredi_cobranca.api.SicrediApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-parceiro.sicredi.com.br");

    SicrediApi apiInstance = new SicrediApi(defaultClient);
    String cooperativa = 1234; // String | 
    String posto = 12; // String | 
    String authorization = Bearer eyJhbc9; // String | 
    String xApiKey = "xApiKey_example"; // String | 
    String contentType = application/json; // String | 
    String idTituloEmpresa = XYZ123456789ABC; // String | 
    String seuNumero = teste; // String | 
    String codigoBeneficiario = 12345; // String | 
    try {
      apiInstance.cobrancaBoletoV1BoletosCadastradosGet(cooperativa, posto, authorization, xApiKey, contentType, idTituloEmpresa, seuNumero, codigoBeneficiario);
    } catch (ApiException e) {
      System.err.println("Exception when calling SicrediApi#cobrancaBoletoV1BoletosCadastradosGet");
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
 **cooperativa** | **String**|  | [optional]
 **posto** | **String**|  | [optional]
 **authorization** | **String**|  | [optional]
 **xApiKey** | **String**|  | [optional]
 **contentType** | **String**|  | [optional]
 **idTituloEmpresa** | **String**|  | [optional]
 **seuNumero** | **String**|  | [optional]
 **codigoBeneficiario** | **String**|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

<a name="cobrancaBoletoV1BoletosLiquidadosDiaGet"></a>
# **cobrancaBoletoV1BoletosLiquidadosDiaGet**
> ConsultarLiquidadosDiaResponseEntity cobrancaBoletoV1BoletosLiquidadosDiaGet(cpfCnpjBeneficiarioFinal, dia, cooperativa, posto, authorization, xApiKey, contentType, codigoBeneficiario, pagina)

Consultar Boletos Liquidados por Dia

### Example
```java
// Import classes:
import br.com.fidias.sicredi_cobranca.ApiClient;
import br.com.fidias.sicredi_cobranca.ApiException;
import br.com.fidias.sicredi_cobranca.Configuration;
import br.com.fidias.sicredi_cobranca.models.*;
import br.com.fidias.sicredi_cobranca.api.SicrediApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-parceiro.sicredi.com.br");

    SicrediApi apiInstance = new SicrediApi(defaultClient);
    String cpfCnpjBeneficiarioFinal = "cpfCnpjBeneficiarioFinal_example"; // String | 
    String dia = 25/01/2024; // String | 
    String cooperativa = 1234; // String | 
    String posto = 12; // String | 
    String authorization = Bearer eyJh4g; // String | 
    String xApiKey = "xApiKey_example"; // String | 
    String contentType = application/x-www-form-urlencoded; // String | 
    String codigoBeneficiario = 12345; // String | 
    Integer pagina = 56; // Integer | 
    try {
      ConsultarLiquidadosDiaResponseEntity result = apiInstance.cobrancaBoletoV1BoletosLiquidadosDiaGet(cpfCnpjBeneficiarioFinal, dia, cooperativa, posto, authorization, xApiKey, contentType, codigoBeneficiario, pagina);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SicrediApi#cobrancaBoletoV1BoletosLiquidadosDiaGet");
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
 **cpfCnpjBeneficiarioFinal** | **String**|  |
 **dia** | **String**|  |
 **cooperativa** | **String**|  | [optional]
 **posto** | **String**|  | [optional]
 **authorization** | **String**|  | [optional]
 **xApiKey** | **String**|  | [optional]
 **contentType** | **String**|  | [optional]
 **codigoBeneficiario** | **String**|  | [optional]
 **pagina** | **Integer**|  | [optional]

### Return type

[**ConsultarLiquidadosDiaResponseEntity**](ConsultarLiquidadosDiaResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** |  |  -  |
**401** |  |  -  |

<a name="cobrancaBoletoV1BoletosNossoNumeroBaixaPatch"></a>
# **cobrancaBoletoV1BoletosNossoNumeroBaixaPatch**
> cobrancaBoletoV1BoletosNossoNumeroBaixaPatch(nossoNumero, authorization, contentType, codigoBeneficiario, cooperativa, posto, xApiKey, body)

Instrução Baixa

### Example
```java
// Import classes:
import br.com.fidias.sicredi_cobranca.ApiClient;
import br.com.fidias.sicredi_cobranca.ApiException;
import br.com.fidias.sicredi_cobranca.Configuration;
import br.com.fidias.sicredi_cobranca.models.*;
import br.com.fidias.sicredi_cobranca.api.SicrediApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-parceiro.sicredi.com.br");

    SicrediApi apiInstance = new SicrediApi(defaultClient);
    String nossoNumero = "nossoNumero_example"; // String | 
    String authorization = Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJBU0ZSSm1VMTBwaWRpbzFlQ254cXUzV2VwaDFjX2xJWFJDVXk5ZGpTZ0drIn0.eyJleHAiOjE3MjA1Mzc2OTksImlhdCI6MTcyMDUzNDA5OSwianRpIjoiMTJjMDFhY2UtYzM0ZS00NWI2LTliMjgtODhiZGRhNDA4NDc1IiwiaXNzIjoiaHR0cHM6Ly9hdXRoLW9wZW5hcGkudWF0LnNpY3JlZGkuY2xvdWQvcmVhbG1zL29wZW5hcGkiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiZjo4YjU0NzRmZi0xZThlLTRiNzYtOWYyYS1iNmExYTIxMzgzZjY6Q09CUkFOQ0E6MTIzNDU2Nzg5IiwidHlwIjoiQmVhcmVyIiwiYXpwIjoib3BlbmFwaS1ndy1zZW5zZWRpYSIsInNlc3Npb25fc3RhdGUiOiI4ZGI5NDQzOS00NjM5LTQ5YTYtYTc3OS1hYjU5YTY0NDhlOGIiLCJhY3IiOiIxIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtb3BlbmFwaSIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sInJlc291cmNlX2FjY2VzcyI6eyJhY2NvdW50Ijp7InJvbGVzIjpbIm1hbmFnZS1hY2NvdW50IiwibWFuYWdlLWFjY291bnQtbGlua3MiLCJ2aWV3LXByb2ZpbGUiXX19LCJzY29wZSI6ImNvYnJhbmNhIGVtYWlsIHByb2ZpbGUiLCJzaWQiOiI4ZGI5NDQzOS00NjM5LTQ5YTYtYTc3OS1hYjU5YTY0NDhlOGIiLCJvcGVuYXBpX3VzZXJuYW1lIjoiMTIzNDU2Nzg5Iiwib3BlbmFwaV9jb250ZXh0IjoiQ09CUkFOQ0EiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsInByZWZlcnJlZF91c2VybmFtZSI6IjEyMzQ1Njc4OSJ9.EDCypmbGnyFrQhNqQbIsHUeQ0DDZ_dTJ1OYKnJSlDSVlkgFgPMQTnN373Kq5QfTWCMiOX4z4muk_05Y96Sk1mVO2deAopsgEnG0yZSrygnGg3JnvLrM_iWdzGjoagkc7yaRrbhgIKdnmdAPUNvyWK8sjzTZtTFU1_OPPLZXhAlH5E59d1jkLoAQZJ6wTA7Aocdh6dZBX2QJ5fiaS5NOlGcNdKHvPmSZ2iac7lc5XdirgXtedlDGi2VmWnUO9VKDxTKKDhJdYNB2QG8GMvTmWtj5v3cFXFIPFzS4D8SB5gQQwKF0_bPjwIvsJXk24zUMIbXqVLVBHWoNKmEw1YNBwiA; // String | 
    String contentType = application/json; // String | 
    String codigoBeneficiario = 12345; // String | 
    String cooperativa = 6789; // String | 
    String posto = 03; // String | 
    String xApiKey = xxxxxxxx-xxxx-xxxe-xxxx-xxxxxxxxxx; // String | 
    Object body = null; // Object | 
    try {
      apiInstance.cobrancaBoletoV1BoletosNossoNumeroBaixaPatch(nossoNumero, authorization, contentType, codigoBeneficiario, cooperativa, posto, xApiKey, body);
    } catch (ApiException e) {
      System.err.println("Exception when calling SicrediApi#cobrancaBoletoV1BoletosNossoNumeroBaixaPatch");
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
 **nossoNumero** | **String**|  |
 **authorization** | **String**|  | [optional]
 **contentType** | **String**|  | [optional]
 **codigoBeneficiario** | **String**|  | [optional]
 **cooperativa** | **String**|  | [optional]
 **posto** | **String**|  | [optional]
 **xApiKey** | **String**|  | [optional]
 **body** | **Object**|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

<a name="cobrancaV1CobrancaFinanceiroMovimentacoesGet"></a>
# **cobrancaV1CobrancaFinanceiroMovimentacoesGet**
> cobrancaV1CobrancaFinanceiroMovimentacoesGet(accept, authorization, xApiKey, codigoBeneficiario, cooperativa, dataLancamento, pagina, posto, tipoMovimento)

Francesinha - PRD

### Example
```java
// Import classes:
import br.com.fidias.sicredi_cobranca.ApiClient;
import br.com.fidias.sicredi_cobranca.ApiException;
import br.com.fidias.sicredi_cobranca.Configuration;
import br.com.fidias.sicredi_cobranca.models.*;
import br.com.fidias.sicredi_cobranca.api.SicrediApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-parceiro.sicredi.com.br");

    SicrediApi apiInstance = new SicrediApi(defaultClient);
    String accept = */*; // String | 
    String authorization = Bearer eyJhJR-g; // String | 
    String xApiKey = "xApiKey_example"; // String | 
    String codigoBeneficiario = 12345; // String | 
    String cooperativa = 1234; // String | 
    String dataLancamento = 07/08/2023; // String | 
    Integer pagina = 0; // Integer | 
    String posto = 12; // String | 
    String tipoMovimento = AMBOS; // String | 
    try {
      apiInstance.cobrancaV1CobrancaFinanceiroMovimentacoesGet(accept, authorization, xApiKey, codigoBeneficiario, cooperativa, dataLancamento, pagina, posto, tipoMovimento);
    } catch (ApiException e) {
      System.err.println("Exception when calling SicrediApi#cobrancaV1CobrancaFinanceiroMovimentacoesGet");
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
 **accept** | **String**|  | [optional]
 **authorization** | **String**|  | [optional]
 **xApiKey** | **String**|  | [optional]
 **codigoBeneficiario** | **String**|  | [optional]
 **cooperativa** | **String**|  | [optional]
 **dataLancamento** | **String**|  | [optional]
 **pagina** | **Integer**|  | [optional]
 **posto** | **String**|  | [optional]
 **tipoMovimento** | **String**|  | [optional]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

<a name="consultarBoleto"></a>
# **consultarBoleto**
> ConsultarBoletoResponseEntity consultarBoleto(authorization, contentType, cooperativa, posto, xApiKey, codigoBeneficiario, nossoNumero)

Consultar Boleto por Nosso Número (v1)

Consulta um boleto pelo Nosso Número.

### Example
```java
// Import classes:
import br.com.fidias.sicredi_cobranca.ApiClient;
import br.com.fidias.sicredi_cobranca.ApiException;
import br.com.fidias.sicredi_cobranca.Configuration;
import br.com.fidias.sicredi_cobranca.models.*;
import br.com.fidias.sicredi_cobranca.api.SicrediApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-parceiro.sicredi.com.br");

    SicrediApi apiInstance = new SicrediApi(defaultClient);
    String authorization = "authorization_example"; // String | 
    String contentType = application/x-www-form-urlencoded; // String | 
    String cooperativa = 6789; // String | 
    String posto = 03; // String | 
    String xApiKey = xxxxxxxx-xxxx-xxxe-xxxx-xxxxxxxxxx; // String | 
    String codigoBeneficiario = 12345; // String | 
    String nossoNumero = 211001293; // String | 
    try {
      ConsultarBoletoResponseEntity result = apiInstance.consultarBoleto(authorization, contentType, cooperativa, posto, xApiKey, codigoBeneficiario, nossoNumero);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SicrediApi#consultarBoleto");
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
 **authorization** | **String**|  | [optional]
 **contentType** | **String**|  | [optional]
 **cooperativa** | **String**|  | [optional]
 **posto** | **String**|  | [optional]
 **xApiKey** | **String**|  | [optional]
 **codigoBeneficiario** | **String**|  | [optional]
 **nossoNumero** | **String**|  | [optional]

### Return type

[**ConsultarBoletoResponseEntity**](ConsultarBoletoResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

<a name="consultarBoletoDataMovimento"></a>
# **consultarBoletoDataMovimento**
> ConsultarBoletoResponseEntity consultarBoletoDataMovimento(cooperativa, posto, authorization, xApiKey, contentType, dataMovimento, codigoBeneficiario, nossoNumero)

Consultar Boleto por Nosso Número (v2 - com data-movimento)

Consulta um boleto pelo Nosso Número com suporte a data de movimento contábil.

### Example
```java
// Import classes:
import br.com.fidias.sicredi_cobranca.ApiClient;
import br.com.fidias.sicredi_cobranca.ApiException;
import br.com.fidias.sicredi_cobranca.Configuration;
import br.com.fidias.sicredi_cobranca.models.*;
import br.com.fidias.sicredi_cobranca.api.SicrediApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-parceiro.sicredi.com.br");

    SicrediApi apiInstance = new SicrediApi(defaultClient);
    String cooperativa = 1234; // String | 
    String posto = 12; // String | 
    String authorization = Bearer eyJhpOA; // String | 
    String xApiKey = "xApiKey_example"; // String | 
    String contentType = application/x-www-form-urlencoded; // String | 
    Boolean dataMovimento = true; // Boolean | 
    String codigoBeneficiario = 12345; // String | 
    String nossoNumero = 211009999; // String | 
    try {
      ConsultarBoletoResponseEntity result = apiInstance.consultarBoletoDataMovimento(cooperativa, posto, authorization, xApiKey, contentType, dataMovimento, codigoBeneficiario, nossoNumero);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SicrediApi#consultarBoletoDataMovimento");
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
 **cooperativa** | **String**|  | [optional]
 **posto** | **String**|  | [optional]
 **authorization** | **String**|  | [optional]
 **xApiKey** | **String**|  | [optional]
 **contentType** | **String**|  | [optional]
 **dataMovimento** | **Boolean**|  | [optional]
 **codigoBeneficiario** | **String**|  | [optional]
 **nossoNumero** | **String**|  | [optional]

### Return type

[**ConsultarBoletoResponseEntity**](ConsultarBoletoResponseEntity.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |

<a name="imprimirBoleto"></a>
# **imprimirBoleto**
> File imprimirBoleto(authorization, xApiKey, posto, cooperativa, contentType, linhaDigitavel)

Imprimir Boleto (PDF)

Gera o PDF do boleto para impressão ou reimpressão (2ª via).

### Example
```java
// Import classes:
import br.com.fidias.sicredi_cobranca.ApiClient;
import br.com.fidias.sicredi_cobranca.ApiException;
import br.com.fidias.sicredi_cobranca.Configuration;
import br.com.fidias.sicredi_cobranca.models.*;
import br.com.fidias.sicredi_cobranca.api.SicrediApi;

public class Example {
  public static void main(String[] args) {
    ApiClient defaultClient = Configuration.getDefaultApiClient();
    defaultClient.setBasePath("https://api-parceiro.sicredi.com.br");

    SicrediApi apiInstance = new SicrediApi(defaultClient);
    String authorization = Bearer eyJ0eXAiOiJKV1QiLCJraWQiOiIzMWVkMTk1My02YzM1LTRjMWMtOGJmMy1jNTkwZGI4NzE4ZTciLCJhbGciOiJSUzI1NiJ9.eyJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJ0eXAiOiJCZWFyZXIiLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiIxMjM0NTY3ODkiLCJzaWQiOiI5MmYyYzQwNy1kOTFkLTQ2YjMtOTk4YS1kZDdmYWMxNjUwZTAiLCJhY3IiOiIxIiwib3BlbmFwaV91c2VybmFtZSI6IjEyMzQ1Njc4OSIsIm9wZW5hcGlfY29udGV4dCI6IkNPQlJBTkNBIiwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbImRlZmF1bHQtcm9sZXMtb3BlbmFwaSIsIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iXX0sImF6cCI6Im9wZW5hcGktZ3ctc2Vuc2VkaWEiLCJzY29wZSI6ImNvYnJhbmNhIGVtYWlsIHByb2ZpbGUiLCJzZXNzaW9uX3N0YXRlIjoiOTJmMmM0MDctZDkxZC00NmIzLTk5OGEtZGQ3ZmFjMTY1MGUwIiwianRpIjoiOTJmMmM0MDctZDkxZC00NmIzLTk5OGEtZGQ3ZmFjMTY1MGUwIiwic3ViIjoiZjoxMTUzM2NmOS03Mzk0LTRjMzYtOWRhYS01ZTk4ZjRkN2FkYzM6Q09CUkFOQ0E6MTIzNDU2Nzg5IiwiaXNzIjoiaHR0cHM6Ly9hdXRoLW9wZW5hcGkudWF0LnNpY3JlZGkuY2xvdWQvcmVhbG1zL29wZW5hcGkiLCJpYXQiOjE3MDM3NjgxNjAsImV4cCI6MTcwMzc3MTc2MCwiYXVkIjoiYWNjb3VudCJ9.f6mjyci9fMEW_Zgif1bUR_cZVYTwEyLuHzD6ydnI63RysyswYGdFxoLoFlJCku-42E3vskCinjQpJ2GJoCFqxLL_idi00NNybEfR2E9EInVDwPFMSCIjK8z20692epFeFy18jXfqn1MFJ6KKEojnBvBCWZVhcXQFcjo0kXxZ_JOXpmLU4-YYe1XseGQ0D1YIZAn5F2iAMSMzWKvgragPnjadIIs95z3YPeWCNqBlU4pnhv8qSLv0hgPUaZgZLc9Nt5xJdDA-JwCVdlgaNk57ADG13LTgMYDT95CjgpCphY8Kl91-hc9tZeMlcR-_9SuLAfXYE0dUXiBi6rYzZK5-nw; // String | 
    String xApiKey = xxxxxxxx-xxxx-xxxe-xxxx-xxxxxxxxxx; // String | 
    String posto = 03; // String | 
    String cooperativa = 6789; // String | 
    String contentType = application/json; // String | 
    String linhaDigitavel = 74891121150039736789903123451001187340000000050; // String | 
    try {
      File result = apiInstance.imprimirBoleto(authorization, xApiKey, posto, cooperativa, contentType, linhaDigitavel);
      System.out.println(result);
    } catch (ApiException e) {
      System.err.println("Exception when calling SicrediApi#imprimirBoleto");
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
 **authorization** | **String**|  | [optional]
 **xApiKey** | **String**|  | [optional]
 **posto** | **String**|  | [optional]
 **cooperativa** | **String**|  | [optional]
 **contentType** | **String**|  | [optional]
 **linhaDigitavel** | **String**|  | [optional]

### Return type

[**File**](File.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/json

### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful response |  -  |
**400** |  |  -  |
**401** |  |  -  |
**422** |  |  -  |
**429** |  |  -  |

