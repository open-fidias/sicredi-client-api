

# CadastrarBoletoFormEntity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beneficiarioFinal** | [**CadastrarBoletoFormEntityBeneficiarioFinal**](CadastrarBoletoFormEntityBeneficiarioFinal.md) |  |  [optional]
**codigoBeneficiario** | **String** |  | 
**dataVencimento** | **String** |  | 
**especieDocumento** | [**EspecieDocumentoEnum**](#EspecieDocumentoEnum) |  | 
**pagador** | [**CadastrarBoletoFormEntityPagador**](CadastrarBoletoFormEntityPagador.md) |  | 
**tipoCobranca** | [**TipoCobrancaEnum**](#TipoCobrancaEnum) |  | 
**seuNumero** | **String** |  | 
**valor** | [**BigDecimal**](BigDecimal.md) |  | 
**informativos** | **List&lt;String&gt;** |  |  [optional]
**mensagens** | **List&lt;String&gt;** |  |  [optional]
**tipoDesconto** | [**TipoDescontoEnum**](#TipoDescontoEnum) |  |  [optional]
**tipoJuros** | [**TipoJurosEnum**](#TipoJurosEnum) |  |  [optional]
**tipoJurosPercentual** | [**TipoJurosPercentualEnum**](#TipoJurosPercentualEnum) |  |  [optional]
**juros** | [**BigDecimal**](BigDecimal.md) |  |  [optional]
**dataInicioJuros** | **String** |  |  [optional]
**tipoMulta** | [**TipoMultaEnum**](#TipoMultaEnum) |  |  [optional]
**multa** | [**BigDecimal**](BigDecimal.md) |  |  [optional]
**dataInicioMulta** | **String** |  |  [optional]
**diasProtestoAuto** | **Integer** |  |  [optional]
**diasNegativacaoAuto** | **Integer** |  |  [optional]
**validadeAposVencimento** | **Integer** |  |  [optional]
**valorDesconto1** | [**BigDecimal**](BigDecimal.md) |  |  [optional]
**dataDesconto1** | **String** |  |  [optional]
**valorDesconto2** | [**BigDecimal**](BigDecimal.md) |  |  [optional]
**dataDesconto2** | **String** |  |  [optional]
**valorDesconto3** | [**BigDecimal**](BigDecimal.md) |  |  [optional]
**dataDesconto3** | **String** |  |  [optional]
**descontoAntecipado** | [**BigDecimal**](BigDecimal.md) |  |  [optional]



## Enum: EspecieDocumentoEnum

Name | Value
---- | -----
DUPLICATA_MERCANTIL_INDICACAO | &quot;DUPLICATA_MERCANTIL_INDICACAO&quot;
DUPLICATA_RURAL | &quot;DUPLICATA_RURAL&quot;
NOTA_PROMISSORIA | &quot;NOTA_PROMISSORIA&quot;
NOTA_PROMISSORIA_RURAL | &quot;NOTA_PROMISSORIA_RURAL&quot;
NOTA_SEGUROS | &quot;NOTA_SEGUROS&quot;
RECIBO | &quot;RECIBO&quot;
LETRA_CAMBIO | &quot;LETRA_CAMBIO&quot;
NOTA_DEBITO | &quot;NOTA_DEBITO&quot;
DUPLICATA_SERVICO_INDICACAO | &quot;DUPLICATA_SERVICO_INDICACAO&quot;
OUTROS | &quot;OUTROS&quot;
BOLETO_PROPOSTA | &quot;BOLETO_PROPOSTA&quot;
CARTAO_CREDITO | &quot;CARTAO_CREDITO&quot;
BOLETO_DEPOSITO | &quot;BOLETO_DEPOSITO&quot;



## Enum: TipoCobrancaEnum

Name | Value
---- | -----
NORMAL | &quot;NORMAL&quot;
HIBRIDO | &quot;HIBRIDO&quot;



## Enum: TipoDescontoEnum

Name | Value
---- | -----
A_VALOR | &quot;A - VALOR&quot;
B_PERCENTUAL | &quot;B - PERCENTUAL&quot;



## Enum: TipoJurosEnum

Name | Value
---- | -----
A_VALOR | &quot;A - VALOR&quot;
B_PERCENTUAL | &quot;B - PERCENTUAL&quot;



## Enum: TipoJurosPercentualEnum

Name | Value
---- | -----
DIARIO | &quot;DIARIO&quot;
MENSAL | &quot;MENSAL&quot;



## Enum: TipoMultaEnum

Name | Value
---- | -----
DIARIO | &quot;DIARIO&quot;
MENSAL | &quot;MENSAL&quot;



