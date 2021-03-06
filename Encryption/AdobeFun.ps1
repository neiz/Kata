#
# Adobe Acrobat stores it's key, encrypted, in the Windows registry hive.
#
#
# The goal here was, given the cipher, encrypt and decrypt the 24 integer key.
#
# The cipher, $AdobeCipher, is an array of 24 elements; each element used to encrypt/decrypt a single integer in the key.
#
#
# The algorithm is this:  1 integer from each element of the cipher array, totaling 24, makes a full key. 
# Taking a substring of the encrypted key at the position ($EncryptedKey.SubString($counter, 1), 1) returns the correct integer
# Doing this while counting to a full key's count (24) decrypts the key.
#
# Re-Encryption requires the opposite.  Using the same given cipher, loop through each element of the key to re-encrypt where 
# IndexOf($EncryptedKey[$counter]) is used to find the position of the given integer string.
#
# PowerScript implementation
#


function ConvertFrom-EncryptedAdobeKey { 
    [CmdletBinding()] 
    Param( 
        [Parameter(Position=0, Mandatory=$true)]  
        [string] 
        [ValidateLength(24,24)] 
        $EncryptedKey
    ) 
 
    $AdobeCipher = "0000000001", "5038647192", "1456053789", "2604371895", 
        "4753896210", "8145962073", "0319728564", "7901235846", 
        "7901235846", "0319728564", "8145962073", "4753896210", 
        "2604371895", "1426053789", "5038647192", "3267408951", 
        "5038647192", "2604371895", "8145962073", "7901235846", 
        "3267408951", "1426053789", "4753896210", "0319728564" 
        
    $counter = 0 
 
    $DecryptedKey = "" 
 
    While ($counter -ne 24) { 
        $DecryptedKey += $AdobeCipher[$counter].substring($EncryptedKey.SubString($counter, 1), 1)
        $counter ++ 
    } 
 
    $DecryptedKey 
    }
    
    
    function Re-EncryptAdobeKey { 
    [CmdletBinding()] 
    Param( 
        [Parameter(Position=0, Mandatory=$true)]  
        [string] 
        [ValidateLength(24,24)] 
        $EncryptedKey
    ) 
 
    $AdobeCipher = "0000000001", "5038647192", "1456053789", "2604371895", 
        "4753896210", "8145962073", "0319728564", "7901235846", 
        "7901235846", "0319728564", "8145962073", "4753896210", 
        "2604371895", "1426053789", "5038647192", "3267408951", 
        "5038647192", "2604371895", "8145962073", "7901235846", 
        "3267408951", "1426053789", "4753896210", "0319728564" 
        
    $counter = 0 
 
    $DecryptedKey = "" 
 
    While ($counter -ne 24) { 
        $DecryptedKey += $AdobeCipher[$counter].IndexOf($EncryptedKey[$counter])
        $counter ++ 
    } 
 
    $DecryptedKey 
    }

    #
    # Test Cases; fake key used to protect the innocent
    #

    ConvertFrom-EncryptedAdobeKey("996325471017410267429239");
    Re-EncryptAdobeKey("123456789012345678901234");
