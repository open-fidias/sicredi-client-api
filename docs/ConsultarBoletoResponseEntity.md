

# ConsultarBoletoResponseEntity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**linhaDigitavel** | **String** |  |  [optional]
**codigoBarras** | **String** |  |  [optional]
**carteira** | [**CarteiraEnum**](#CarteiraEnum) |  |  [optional]
**nossoNumero** | **String** |  |  [optional]
**seuNumero** | **String** |  |  [optional]
**pagador** | [**ConsultarBoletoResponseEntityPagador**](ConsultarBoletoResponseEntityPagador.md) |  |  [optional]
**beneficiarioFinal** | [**ConsultarBoletoResponseEntityBeneficiarioFinal**](ConsultarBoletoResponseEntityBeneficiarioFinal.md) |  |  [optional]
**dataEmissao** | **String** |  |  [optional]
**dataVencimento** | **String** |  |  [optional]
**valorNominal** | [**BigDecimal**](BigDecimal.md) |  |  [optional]
**situacao** | [**SituacaoEnum**](#SituacaoEnum) |  |  [optional]
**txId** | **String** |  |  [optional]
**codigoQrCode** | **String** |  |  [optional]
**tipoMulta** | [**TipoMultaEnum**](#TipoMultaEnum) |  |  [optional]
**multa** | [**BigDecimal**](BigDecimal.md) |  |  [optional]
**dataInicioMulta** | **String** |  |  [optional]
**abatimento** | [**BigDecimal**](BigDecimal.md) |  |  [optional]
**tipoJuros** | [**TipoJurosEnum**](#TipoJurosEnum) |  |  [optional]
**tipoJurosPercentual** | [**TipoJurosPercentualEnum**](#TipoJurosPercentualEnum) |  |  [optional]
**juros** | [**BigDecimal**](BigDecimal.md) |  |  [optional]
**dataInicioJuros** | **String** |  |  [optional]
**diasProtesto** | [**BigDecimal**](BigDecimal.md) |  |  [optional]
**idTituloEmpresa** | **String** |  |  [optional]
**validadeAPosVencimento** | [**BigDecimal**](BigDecimal.md) |  |  [optional]
**diasNegativacao** | [**BigDecimal**](BigDecimal.md) |  |  [optional]
**tipoDesconto** | [**TipoDescontoEnum**](#TipoDescontoEnum) |  |  [optional]
**descontoAntecipacao** | [**BigDecimal**](BigDecimal.md) |  |  [optional]
**descontos** | [**List&lt;ConsultarBoletoResponseEntityDescontos&gt;**](ConsultarBoletoResponseEntityDescontos.md) |  |  [optional]
**dadosLiquidacao** | [**ConsultarBoletoResponseEntityDadosLiquidacao**](ConsultarBoletoResponseEntityDadosLiquidacao.md) |  |  [optional]
**dataMovimento** | **String** |  |  [optional]
**dataPrevisaoPagamento** | **String** |  |  [optional]
**boletoComSplit** | [**BoletoComSplitEnum**](#BoletoComSplitEnum) |  |  [optional]



## Enum: CarteiraEnum

Name | Value
---- | -----
A_SIMPLES | &quot;A - SIMPLES&quot;
B_CAUCIONADA | &quot;B - CAUCIONADA&quot;
C_DESCONTADA | &quot;C - DESCONTADA&quot;
D_VINCULADA | &quot;D - VINCULADA&quot;



## Enum: SituacaoEnum

Name | Value
---- | -----
EM_CARTEIRA | &quot;EM CARTEIRA&quot;
EM_CARTEIRA_PIX | &quot;EM CARTEIRA PIX&quot;
VENCIDO | &quot;VENCIDO&quot;
LIQUIDADO | &quot;LIQUIDADO&quot;
LIQUIDADO_CARTORIO | &quot;LIQUIDADO CARTORIO&quot;
LIQUIDADO_REDE | &quot;LIQUIDADO REDE&quot;
LIQUIDADO_COMPE | &quot;LIQUIDADO COMPE&quot;
LIQUIDADO_PIX | &quot;LIQUIDADO PIX&quot;
LIQUIDADO_CHEQUE | &quot;LIQUIDADO CHEQUE&quot;
BAIXADO_POR_SOLICITACAO | &quot;BAIXADO POR SOLICITACAO&quot;
PROTESTADO | &quot;PROTESTADO&quot;
EM_CARTORIO | &quot;EM CARTORIO&quot;
NEGATIVADO | &quot;NEGATIVADO&quot;
AGUARDANDO_ENTRADA_EM_CARTORIO | &quot;AGUARDANDO ENTRADA EM CARTORIO&quot;
AGUARDANDO_SUSTACAO_DE_CARTORIO | &quot;AGUARDANDO SUSTACAO DE CARTORIO&quot;
REJEITADO | &quot;REJEITADO&quot;



## Enum: TipoMultaEnum

Name | Value
---- | -----
VALOR | &quot;VALOR&quot;
PERCENTUAL | &quot;PERCENTUAL&quot;



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



## Enum: TipoDescontoEnum

Name | Value
---- | -----
A_VALOR | &quot;A - VALOR&quot;
B_PERCENTUAL | &quot;B - PERCENTUAL&quot;



## Enum: BoletoComSplitEnum

Name | Value
---- | -----
SIM | &quot;SIM&quot;
NAO | &quot;NAO&quot;



