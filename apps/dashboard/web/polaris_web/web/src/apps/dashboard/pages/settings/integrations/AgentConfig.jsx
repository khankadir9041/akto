import IntegrationsLayout from "./IntegrationsLayout";

function AgentConfig() {

    let cardContent = "Configure agents to make business decisions faster"

    const Card = (
        <LegacyCard
            primaryFooterAction={{content: 'Save', onAction: () => addAwsWafIntegration()}}
        >
          <LegacyCard.Section>
            <Text variant="headingMd">Integrate AWS-WAF</Text>
          </LegacyCard.Section>

          <LegacyCard.Section>
            <VerticalStack gap={"2"}>
                <TextField value={accessKey} onChange={setAccessKey} label="AWS Access Key Id" placeholder="AWS-Key"/>
                <PasswordTextField text={secretKey}
                                    setField={setSecretKey} onFunc={true} field={secretKey} 
                                    label="AWS secret Access Key"
                />
                <TextField value={region} onChange={setRegion} label="Region" placeholder="Region"/>
                <TextField value={ruleSetId} onChange={setRuleSetId} label="Waf Rule Set Id" placeholder="Rule-Set=Id"/>
                <TextField value={ruleSetName} onChange={setRuleSetName} label="Waf Rule Set Name" placeholder="Waf-Rule-Set-Name"/>
            </VerticalStack>
          </LegacyCard.Section> 
        </LegacyCard>
    )

    return (
        <IntegrationsLayout title= "Agents configuration" cardContent={cardContent} component={Card} docsUrl=""/> 
    )
}

export default AgentConfig;