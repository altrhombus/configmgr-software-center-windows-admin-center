<#

.SYNOPSIS
Checks all available applications in the Software Center.

.DESCRIPTION
Checks all available applications in the Software Center. Only applications
deployed to the local machine are listed.

.ROLE
Readers

#>

Get-WmiObject -Namespace root\CCM\ClientSDK -Class CCM_Application