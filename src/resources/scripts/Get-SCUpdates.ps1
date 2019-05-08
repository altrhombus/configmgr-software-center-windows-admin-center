<#

.SYNOPSIS
Checks all available updates in the Software Center.

.DESCRIPTION
Checks all available updates in the Software Center.

.ROLE
Readers

#>

Get-WmiObject -Namespace root\CCM\ClientSDK -Class CCM_SoftwareUpdate -Filter ComplianceState=0